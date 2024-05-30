import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/edit-form';
import { fetchInvoiceById, fetchCustomers, fetchUser } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const user = await fetchUser(params.id); // Adjust based on actual user identification
  return {
    title: `Edit Invoice | ${user ? user.name : 'User'}`,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers, user] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
    fetchUser(id), // Ensure you are fetching the user based on correct identification
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: `Edit ${user ? user.name : 'Customer'} Invoice`,
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
