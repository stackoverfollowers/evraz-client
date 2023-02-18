import { useRouter } from 'next/router';
import Link from 'next/link';
import cx from 'clsx';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

function Breadcrumbs() {
	const router = useRouter();
	const exhauster = useSelector((state: RootState) => state.graph.exhauster);
	const pathnames = router.asPath.split('/').filter(pathname => pathname);

	const navigation: {
		[route: string]: any;
	} = {
		'/': 'Прогнозная аналитика эксгаустеров',
		'/[id]': (id: string) =>
			id && exhauster
				? `Состояние эксгаустера ${exhauster.title}`
				: 'Состояние эксгаустера',
	};

	return (
		<nav
			className="flex items-center pl-[50px] gap-[3px] w-full h-[25px]"
			aria-label="breadcrumbs"
		>
			<ul className="flex items-center gap-[3px]">
				<li
					className={cx(
						'flex items-center gap-[3px] text-[15px] leading-[17px]',
						0 !== pathnames.length
							? 'text-[#8C8C8C] font-normal hover:text-black'
							: 'font-bold'
					)}
				>
					<span className="py-1">/</span>
					<Link className="px-2.5" href="/">
						{navigation['/']}
					</Link>
				</li>
				{pathnames.map((pathname, index) => {
					const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;

					const mapping = navigation[router.pathname];

					const label =
						typeof mapping === 'function' ? mapping(router.query.id) : mapping;

					return (
						<li
							className={cx(
								'flex items-center gap-[3px] text-[15px] leading-[17px]',
								index !== pathnames.length - 1
									? 'text-[#8C8C8C] font-normal hover:text-black'
									: 'font-bold'
							)}
							key={routeTo}
						>
							<span className=" py-1">/</span>
							<Link className="px-2.5" href={routeTo}>
								{label}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Breadcrumbs;
