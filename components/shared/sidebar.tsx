'use client'

import { cn } from '@/lib/utils'
import { History, Home, Plus, Send, Settings } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation';

const Sidebar = () => {
	const pathname = usePathname();
	const router = useRouter();

	const links = [
		{
			icon: Home,
			path: '/',
			label: 'Home',
			pro: false,
		},
		{
			icon: Plus,
			path: '/plus',
			label: 'Create',
			pro: false,
		},
		{
			icon: Settings,
			path: '/settings',
			label: 'Settings',
			pro: false,
		},
		{
			icon: Send,
			path: 'https://t.me/+VfFrxp6x_vI2NGMy',
			label: 'Telegram',
			pro: true,
		},
		{
			icon: History,
			path: '/history',
			label: 'History',
			pro: false,
		}
	]

	const onNavigate = (url: string, pro: boolean, path?: string) => {
		//ToDo check if pro

		if (pro) {
			return	(
				window.open(url, '_blank')
			)
		}else if (path === 'plus'){
			return router.push('/plus')
		} else {
			return router.push(url)
		}

		

		
	}
	return (
			<div className='flex flex-col space-y-4 h-full text-primary '>
				<div className='p-3 flex-1 flex justify-center'>
					<div className='space-y-2'>
						{links.map(route => (
							<div
								onClick={() => onNavigate(route.path, route.pro)}
								key={route.path}
								className={cn(
									'text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover: hover:bg-primary/10 rounded-lg transition',
									pathname === route.path && 'bg-primary/10 text-primary'
								)}
							>
								<div className='flex flex-col gap-y-2 items-center flex-1'>
									<route.icon className='w-5 h-5' />
									{route.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		
	)
}

export default Sidebar
