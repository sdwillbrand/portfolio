import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="flex items-center justify-between p-2 text-[8px] md:text-xs">
        <p>© Alle Rechte vorbehalten</p>
        <div className="flex gap-2">
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/impressum">Impressum</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
