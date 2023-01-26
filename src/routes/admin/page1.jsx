export async function loader({ params }) {
  await fakeNetwork();
  return null;
}

export default function Admin_Page1() {
  return (
    <>
      Admin | Page 1
    </>
  );
}

async function fakeNetwork(key) {
  return new Promise(res => {
    setTimeout(res, 800);
  });
}