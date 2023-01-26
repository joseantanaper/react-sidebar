import { Outlet, NavLink, useNavigation } from "react-router-dom";

export default function Root() {

  const navigation = useNavigation();

  return (
    <>
      <div id="sidebar">

        <div className="fixed">

          <h1>React Sidebar</h1>

          <div className="form">

            <form id="search-form" role="search">
              <input
                className="form-control"
                id="q"
                name="q"
                aria-label="Search"
                placeholder="Search"
                type="search"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>

            <form method="post">
              <button className="btn btn-primary" type="submit">New</button>
            </form>

          </div>

          <nav>
            <ul>
              <li>
                <NavLink to={`/`}>Home</NavLink>
              </li>
              <hr />
              <li>
                <NavLink to={`/quote/generator`}>Quote Generator</NavLink>
              </li>
              <hr />
              <li>
                <NavLink to={`/pokedex/list`}>Pokedex</NavLink>
              </li>
              <hr />
              <li>
                <NavLink to={`/admin/page1`}>Admin | Page 1</NavLink>
              </li>
              <li>
                <NavLink to={`/admin/page2`}>Admin | Page 2</NavLink>
              </li>
              <li>
                <NavLink to={`/admin/error`}>Admin | Error</NavLink>
              </li>
            </ul>
          </nav>

        </div>

      </div>


      <div
        id="detail"
        className={
          navigation.state === "loading" ? "loading" : ""
        }
      >
        <Outlet />
      </div>


    </>
  );
}