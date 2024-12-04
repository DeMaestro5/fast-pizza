import UpdateItemQuantity from '../cart/UpdateItemQuantity';
import DeleteItemButton from '../cart/DeleteItemButton';
import { formatCurrency } from '../../utils/helpers';
import { useSelector } from 'react-redux';
import { getCurrentQuantityById } from './cartSlice.js';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItemButton pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
