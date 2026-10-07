export const metadata = {
  title: "Taller de Mecánica y Repuestos Erimaldi | Taller mecánico en Ensanche Kennedy, Santo Domingo",
  description:
    "Taller de Mecánica y Repuestos Erimaldi — reparación de vehículos americanos, japoneses, coreanos y europeos en Ensanche Kennedy, Santo Domingo. Diagnóstico, frenos, transmisión y repuestos. Cotiza: (809) 426-1923.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
