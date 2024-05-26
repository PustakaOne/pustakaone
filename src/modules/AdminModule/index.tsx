"use client"
import React, { useEffect, useState } from 'react';
import { Button } from '@/components';


export const AdminModule: React.FC = () => {
  const [logs, setLogs] = useState([])
  const [carts, getCarts] = useState([])
  const [users, getUsers] = useState([])

  const finishCart = async (id:string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL_LOCAL}/update-payment`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "id" : id
      }) 
    });
    console.log(res.ok)
    const response = await res.json();
    return response;
  }

  const buttonHandler = async(id:string) => {
    await finishCart(id)
    await getLogData()
    await getCartData()
    await getUsersData()
  }

  const getLogData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL}/logs`, {cache:"no-store"});
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const response  = await res.json()
    setLogs(response)
  }
  
  const getCartData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL}/payments`, {cache:"no-store"});
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const response  = await res.json()
    getCarts(response)
  }

  const getUsersData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL}/users`, {cache:"no-store"});
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const response  = await res.json()
    console.log(response)
    getUsers(response)
  }

  useEffect(()=> {
    getLogData();
    getCartData();
    getUsersData();
  }, []) 


  return (
    <>
      <div className="container flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-3xl font-inika font-bold">
            Daftar Log Admin:
          </h2>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-5 border-b text-center">ID</th>
              <th className="px-4 py-5 border-b text-center">Action</th>
              <th className="px-4 py-5 border-b text-center">Date</th>
            </tr>
          </thead>
          <tbody>
              {logs.map((log:{id:string, action:string, date:string}) => (
                <tr key={log.id}>
                  <td className="px-4 py-5 border-b text-center">{log.id}</td>
                  <td className="px-4 py-5 border-b text-center">{log.action}</td>
                  <td className="px-4 py-5 border-b text-center">{log.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="container flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-3xl font-inika font-bold">
            Daftar User Terdaftar:
          </h2>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-5 border-b text-center">Nama</th>
              <th className="px-4 py-5 border-b text-center">Email</th>
            </tr>
          </thead>
          <tbody>
              {users.map((user:{fullName:string, email:string}) => (
                <tr key={user.fullName}>
                  <td className="px-4 py-5 border-b text-center">{user.fullName}</td>
                  <td className="px-4 py-5 border-b text-center">{user.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <br></br>

        <div>
          <div className="container flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-1">
              <h2 className="text-3xl font-inika font-bold">
                Daftar Cart:
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-5 border-b text-center">Cart Id</th>
                <th className="px-4 py-5 border-b text-center">Address</th>
                <th className="px-4 py-5 border-b text-center">Status</th>
                <th className="px-4 py-5 border-b text-center">Action</th>
              </tr>
            </thead>
            <tbody>
            {carts.map((cart: {id:string, address:string, status:string}) => (
              <tr key={cart.id}>
                <td className="px-4 py-5 border-b text-center">{cart.id}</td>
                <td className="px-4 py-5 border-b text-center">{cart.address}</td>
                <td className="px-4 py-5 border-b text-center">{cart.status}</td>
                <div className="px-4 py-5 flex justify-center border-b">
                  <Button variant='primary' onClick={() => buttonHandler(cart.id)}>Selesaikan</Button>
                </div>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
