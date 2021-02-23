import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </nav>
  );
};

export default Navigation;
