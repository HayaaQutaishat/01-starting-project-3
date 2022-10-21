import styles from "./UsersList.module.css";
import Card from "../UI/Card";
const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.list.map((item) => (
          <li key={item.id}>
            {item.name} ({item.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
