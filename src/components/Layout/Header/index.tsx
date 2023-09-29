import { Link } from "react-router-dom";

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = (): JSX.Element => {
  return (
    <div className="px-5 py-3 bg-gray-100 flex justify-between items-center">
      <h1>
        <Link to="/">
          <img
            alt="quera-app"
            src="https://quera.org/static/images/logo/logo-quera-heavy.2-1c1287ee3575.svg"
          />
        </Link>
      </h1>
      <div>
        <Link to="/authentication">
          <button className="btn btn-neutral">ورود یا ثبت نام</button>
        </Link>
      </div>
    </div>
  );
};
