import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main className="flex flex-col grow">
				<div className="flex grow bg-[#F0F0F0] p-4">{children}</div>
			</main>
		</>
	);
}
