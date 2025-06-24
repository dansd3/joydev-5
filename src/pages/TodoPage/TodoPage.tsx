import { Heading } from '../../components/Heading/Heading';
import { TodoInput } from '../../components/TodoInput/TodoInput';
import { Button } from '../../components/Button/Button';
import { Column } from '../../components/Column/Column';
import styles from './TodoPage.module.scss';

interface Task {
  id: string;
  title: string;
  status: 'todo' | 'inprogress' | 'done';
}

export const TodoPage = () => {
  const tasks: Task[] = [
    { id: '1', title: 'Задача 1', status: 'todo' },
    { id: '2', title: 'Задача 2', status: 'todo' },
    { id: '3', title: 'Задача 3', status: 'todo' },
    { id: '4', title: 'Задача 4', status: 'inprogress' },
    { id: '5', title: 'Задача 5', status: 'done' },
    { id: '6', title: 'Задача 6', status: 'done' },
  ];

  return (
    <div className={styles.page}>
      <Heading size={500} className={styles.page__title}>Поле ввода названия задачи</Heading>
      <div className={styles.page__input}>
        <TodoInput value="" onChange={() => {}} className={styles.page__inputField} />
        <Button variant="primary" icon="plus" label="Добавить" onClick={() => {}} />
      </div>
      <div className={styles.page__board}>
        {['todo', 'inprogress', 'done'].map(status => (
          <Column
            key={status}
            status={status as Task["status"]}
            tasks={tasks.filter(task => task.status === status)}
            onDrop={() => {}}
            onDelete={() => {}}
            onDragStart={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoPage;