import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Admincontext } from "./AdminContext";
import { MdClose } from "react-icons/md";

const UserPage = () => {
  const { User, Block } = useContext(Admincontext);
  const [usershow, setUsershow] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {User.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50"
                onDoubleClick={() => setUsershow(user)}
              >
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-gray-700">
                  {user.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-gray-700">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  <button
                    className={`${
                      user.status
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-blue-600 hover:bg-blue-800"
                    } text-white font-semibold py-1 px-3 rounded`}
                    onClick={() => Block(user.id, user.status)}
                  >
                    {user.status ? "Block" : "Unblock"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {usershow && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-md w-full">
              <MdClose
                className="absolute top-2 right-2 text-gray-600 cursor-pointer"
                onClick={() => setUsershow(null)}
                size={24}
              />
              <h2 className="text-xl font-semibold mb-4">User Details</h2>
              <p>
                <span className="font-semibold">Username:</span>{" "}
                {usershow.username}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {usershow.email}
              </p>

              {usershow.order && usershow.order.length > 0 ? (
                <>
                  {usershow.order.map((order, index) => (
                    <div key={order.id} className="border-t mt-4 pt-4">
                      <p className="font-semibold">Order {index + 1}</p>
                      <p>
                        <span className="font-semibold">Date:</span>{" "}
                        {new Date(order.date).toLocaleString()}
                      </p>
                      <ul className="ml-4 list-disc">
                        {order.items.map((item) => (
                          <li key={item.id} className="flex justify-between">
                            <span>{item.username}</span>
                            <span>
                              {item.quantity} x ${item.price.toFixed(2)}
                            </span>
                            <span>
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-2">
                        <span className="font-semibold">Order Total:</span> $
                        {order.total.toFixed(2)}
                      </p>
                    </div>
                  ))}
                  <div className="border-t mt-4 pt-4">
                    <p className="font-semibold">
                      Total Amount: $
                      {usershow.order
                        .reduce((acc, order) => acc + order.total, 0)
                        .toFixed(2)}
                    </p>
                  </div>
                </>
              ) : (
                <p className="mt-4 text-gray-600">No orders found.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPage;
