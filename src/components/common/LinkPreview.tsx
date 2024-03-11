import { useState, useEffect } from "react";
import Image from "next/image";

interface Props {
  readonly url: string;
}

interface Preview {
  title: string;
  description: string;
  image: string;
}

function LinkPreview({ url }: Props) {
  const [previewData, setPreviewData] = useState<Preview | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const proxyUrl = "https://corsproxy.io/?" + encodeURIComponent(url);
        const response = await fetch(proxyUrl);
        const data = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const title = doc.querySelector("title")?.textContent || "";
        const description =
          doc
            .querySelector('meta[name="description"]')
            ?.getAttribute("content") || "";
        const image =
          doc
            .querySelector('meta[property="og:image"]')
            ?.getAttribute("content") || "";
        console.log(image);
        setPreviewData({ title, description, image });
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch link preview.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!previewData) return null;

  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      style={{ cursor: "pointer" }}
      className="flex flex-col max-w-[300px] border rounded-md hover:scale-95 hover:bg-[rgba(255,255,255,0.2)] transition-all duration-400"
    >
      {previewData.image && (
        <Image
          className="rounded-t-md"
          src={previewData.image}
          alt="Link Preview"
          width={300}
          height={100}
          priority
        />
      )}
      <div className="p-2">
        <h3 className="text-sm">{previewData.title}</h3>
        <p className="text-xs text-gray-500 pt-2">{previewData.description}</p>
      </div>
    </div>
  );
}

export default LinkPreview;
