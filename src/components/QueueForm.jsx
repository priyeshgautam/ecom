import { useState } from 'react';
import { FaUser } from 'react-icons/fa';

export default function QueueForm({onAdd}) {
    const [name, setName] = useState('');
    const [service, setService] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent the default form submission i.e. call API

        if (!name.trim() || !service.trim()) {
            alert('Please fill in all fields');
            return;
        }
        onAdd({ name, service });
        setName('');
        setService('');
    };
  return (
    <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl shadow-xl px-8 py-6 w-full max-w-md">
      <h2 className="text-xl font-semibold text-violet-400 mb-4">Add to queue</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Customer name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
          />
        </div>
        <div>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
          >
            <option value="">Select Service</option>
            <option value="consultation">Consultation</option>
            <option value="service">Service</option>
            <option value="product">Product</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-black hover:bg-violet-500 transition-colors"
        >
          <FaUser /> Add Customer
        </button>
      </form>
    </div>
  )
}