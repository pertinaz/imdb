import { Redirect } from 'react-router-dom';

const HandleSelection = (id, name) => {
    const formattedName = name.toLowerCase().replace(/[a-zA-Z0-9]+/g,'-');
    const detailsURL = `/type/${id}-${formattedName}`;

    return <Redirect to={detailsURL} />;
};

export default HandleSelection;