import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      Something went wrong...
      <Link to="/">Back to home page</Link>
    </div>
  );
}
