import Link from 'next/link'
import { Image } from '@/components'
import logo from '@/public/images/icons/logo.svg'
import post from '@/public/images/icons/post.svg'
import avatar from '@/public/images/pictures/avatar.png'
import home from '@/public/images/icons/home.svg'
import explore from '@/public/images/icons/explore.svg'
import notification from '@/public/images/icons/notification.svg'
import message from '@/public/images/icons/message.svg'
import bookmark from '@/public/images/icons/bookmark.svg'
import job from '@/public/images/icons/job.svg'
import community from '@/public/images/icons/community.svg'
import profile from '@/public/images/icons/profile.svg'
import more from '@/public/images/icons/more.svg'

const menuList = [
	{
		id: 1,
		name: 'Homepage',
		link: '/',
		icon: home,
	},
	{
		id: 2,
		name: 'Explore',
		link: '/',
		icon: explore,
	},
	{
		id: 3,
		name: 'Notification',
		link: '/',
		icon: notification,
	},
	{
		id: 4,
		name: 'Messages',
		link: '/',
		icon: message,
	},
	{
		id: 5,
		name: 'Bookmarks',
		link: '/',
		icon: bookmark,
	},
	{
		id: 6,
		name: 'Jobs',
		link: '/',
		icon: job,
	},
	{
		id: 7,
		name: 'Communities',
		link: '/',
		icon: community,
	},
	{
		id: 8,
		name: 'Premium',
		link: '/',
		icon: logo,
	},
	{
		id: 9,
		name: 'Profile',
		link: '/',
		icon: profile,
	},
	{
		id: 10,
		name: 'More',
		link: '/',
		icon: more,
	},
]

const LeftBar = () => {
	return (
		<div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
			<div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
				<Link
					href="/"
					className="p-2 rounded-full hover:bg-[#181818]"
					aria-label="home"
				>
					<Image
						src={logo}
						alt="logo"
						width={24}
						height={24}
					/>
				</Link>
				<nav
					aria-label="Left side menu"
					className="flex flex-col gap-4"
				>
					{menuList.map((item) => (
						<Link
							href={item.link}
							prefetch={false}
							className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
							key={item.id}
						>
							<Image
								src={item.icon}
								alt={item.name}
								width={24}
								height={24}
							/>
							<span className="hidden xxl:inline">{item.name}</span>
						</Link>
					))}
				</nav>
				<Link
					href="/compose/post"
					className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden"
				>
					<Image
						src={post}
						alt="new post"
						width={24}
						height={24}
					/>
				</Link>
				<Link
					href="/compose/post"
					className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
				>
					Post
				</Link>
			</div>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<div className="w-10 h-10 relative rounded-full overflow-hidden">
						<Image
							src={avatar}
							alt="M. Rad"
							width={40}
							height={40}
							className="object-cover"
						/>
					</div>
					<div className="hidden xxl:flex flex-col">
						<span className="font-bold">M. Rad</span>
						<span className="text-sm text-textGray">@mehdiradx</span>
					</div>
				</div>
				<button
					type="button"
					aria-label="More options"
					className="hidden xxl:block cursor-pointer font-bold"
				>
					…
				</button>
			</div>
		</div>
	)
}

export default LeftBar
