export default function AdminIndex() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Menu />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header
      style={{
        backgroundColor: "#e2e8f0",
        padding: "10px",
        textAlign: "center",
      }}
    >
      Header
    </header>
  );
}

function Menu() {
  return (
    <aside
      style={{
        backgroundColor: "#1e3a8a",
        color: "#fff",
        padding: "20px",
        width: "200px",
      }}
    >
      Menu
    </aside>
  );
}

function Main() {
  return (
    <main style={{ flex: 1, padding: "20px", textAlign: "center" }}>Main</main>
  );
}

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#e2e8f0",
        padding: "10px",
        textAlign: "center",
      }}
    >
      Footer
    </footer>
  );
}
