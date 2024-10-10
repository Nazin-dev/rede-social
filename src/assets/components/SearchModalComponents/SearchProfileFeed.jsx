import './SearchProfileFeed.css';
import SearchProfileItem from './SearchProfileItem';

function SearchProfileFeed({ profiles, onDeleteProfile }) {
  return (
    <>
      {profiles.map((profile, index) => (
        <SearchProfileItem 
          key={index}
          userProfile={profile.userProfile}
          userName={profile.userName}
          name={profile.name}
          onDelete={() => onDeleteProfile(index)} // Função de delete para cada perfil
        />
      ))}
    </>
  );
}

export default SearchProfileFeed;
