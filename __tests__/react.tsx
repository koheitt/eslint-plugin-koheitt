export default function App() {
  return (
    <>
      <h1>Hello world</h1>
      <input
        placeholder="Your name"
        // eslint-disable-next-line @stylistic/jsx-closing-bracket-location, @stylistic/indent
        />

      {/* eslint-disable-next-line react/no-unknown-property */}
      <div myAttr="invalid"></div>
    </>
  );
}
