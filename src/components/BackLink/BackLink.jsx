import { Link } from 'react-router-dom';
const BackLink = ({ href }) => {
  return <Link to={href}>Back</Link>;
};
export default BackLink;
