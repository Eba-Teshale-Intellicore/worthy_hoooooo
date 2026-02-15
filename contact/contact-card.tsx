
import React from 'react';
import { cn } from '../lib/utils';
import { Link } from '../lib/next-compat';
import { PlusIcon, LucideIcon } from 'lucide-react';
import { data } from '../lib/data';

type ContactInfoProps = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	label: string;
	value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
	title?: string;
	description?: string;
	contactInfo?: ContactInfoProps[];
	formSectionClassName?: string;
};

export function ContactCard({
	title = 'Contact With Us',
	description = 'If you have any questions regarding our Services or need help, please fill out the form here.',
	contactInfo,
	className,
	formSectionClassName,
	children,
	...props
}: ContactCardProps) {
	return (
		<div
			className={cn(
				'bg-white text-black border border-slate-100 relative grid w-full shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden md:grid-cols-2 lg:grid-cols-3',
				className,
			)}
			{...props}
		>
			<PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-slate-200" />
			<PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-slate-200" />
			<PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-slate-200" />
			<PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 text-slate-200" />
			<div className="flex flex-col justify-between lg:col-span-2">
				<div className="relative h-full space-y-6 px-8 py-12 md:p-14">
					<h2 className="text-3xl font-black md:text-4xl lg:text-5xl tracking-tight">
						{title}
					</h2>
					<p className="text-slate-500 max-w-xl text-sm md:text-base lg:text-lg font-medium leading-relaxed">
						{description}
					</p>
					<div className="grid gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 pt-4">
						{contactInfo?.map((info, index) => (
							<ContactInfo key={index} {...info} />
						))}
					</div>
				</div>
				<ul className="mb-14 ml-8 md:ml-14 flex justify-center sm:justify-start gap-6">
					{data.socialLinks.map(({ icon: Icon, label, href }) => (
						<li key={label}>
							<Link href={href} className="text-slate-400 hover:text-green-600 transition-all transform hover:scale-110">
								<span className="sr-only">{label}</span>
								<Icon className="w-6 h-6" />
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div
				className={cn(
					'bg-slate-50 flex h-full w-full items-center border-t border-slate-100 p-8 md:col-span-1 md:border-t-0 md:border-l',
					formSectionClassName,
				)}
			>
				{children}
			</div>
		</div>
	);
}

function ContactInfo({
	icon: Icon,
	label,
	value,
	className,
	...props
}: ContactInfoProps) {
	return (
		<div className={cn('flex items-center gap-4 py-3', className)} {...props}>
			<div className="bg-slate-100 text-green-600 rounded-xl p-3 border border-slate-200 shadow-sm">
				<Icon className="h-5 w-5" />
			</div>
			<div>
				<p className="font-bold text-slate-900 text-sm">{label}</p>
				<p className="text-slate-500 text-xs font-medium">{value}</p>
			</div>
		</div>
	);
}
