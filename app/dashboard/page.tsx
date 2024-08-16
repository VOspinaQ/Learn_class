import { Card } from '@/app/ui/dashboard/cards';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue, fetchLatestInvoices } from '@/app/lib/data';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
 
export default async function Page() {
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();

    // Suponiendo que solo puedes contar el número total de facturas
    const numberOfInvoices = latestInvoices.length;

    // Si necesitas calcular los clientes, pero no tienes `customerId`, puedes omitir esta parte o crear una propiedad `customerId` si es posible
    const numberOfCustomers = latestInvoices.length; // Si cada factura corresponde a un cliente único

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Como no tienes 'status', no puedes calcular 'totalPaidInvoices' o 'totalPendingInvoices' */}
                <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
                <Card title="Total Customers" value={numberOfCustomers} type="customers" />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <RevenueChart revenue={revenue} />
                <LatestInvoices latestInvoices={latestInvoices} />
            </div>
        </main>
    );
}
