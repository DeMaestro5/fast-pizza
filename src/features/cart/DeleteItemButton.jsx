import { deleteItem } from './cartSlice';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';

function DeleteItemButton({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItemButton;
