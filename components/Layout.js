import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <header>
        <Link href='/'>
          <a>
            <h1>
              <span>Create Your</span>
              <span>PIZZA</span>
            </h1>
            <h2>with best recipes</h2>
          </a>
        </Link>
      </header>

      <div className='page-content'>{children}</div>

      <footer>
        <p>Copyright 2021 © Pizza Recipes</p>
      </footer>
    </div>
  );
}
