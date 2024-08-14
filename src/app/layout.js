import "./globals.css";

export const metadata = {
  title: "Agustín Haefeli - Portfolio",
  description: "Estudiante de Tecnicatura Universitaria en Programación (TUP). Fullstack Developer con Next y Django.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
