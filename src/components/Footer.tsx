export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-border mt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-mono text-foreground/60">
          © {new Date().getFullYear()} G Priyadharsan. All rights reserved.
        </p>
        <div className="flex gap-4">
          <span className="text-accent text-sm font-bold tracking-widest uppercase">
            [ Stay Brutal ]
          </span>
        </div>
      </div>
    </footer>
  );
}
