<script>
	let events = [
		{
			title: 'Amazon, India',
			role: 'Programmer Analyst (Software Development Engineer)',
			date: 'January 2021 ',
			event: ` Working in the Transportation Technology Org, I have worked on migrating multiple software services from legacy platforms onto newly created architectures. I took care of shadow mode implementations as well, making sure there is no impact in Production.
			I am responsible for onboarding multiple third party carriers onto the Amazon network by designing, planning and finally implementing their specific requirements to integrate with our systems. 
			We ensured a smooth 'Prime Day' across 2 years with no downtime.
			`,
			icon: 'bx bx-briefcase-alt text-[#85586F]'
		},
		{
			title: 'Happiest Minds Technologies',
			role: 'Software Development Engineer - Intern',
			date: 'June 2020 - August 2020',
			event: `Built a drone based surveillance system to detect objects, track and localise them in 3D.
			The solution involved comparing the working of two models - Retinanet and a RCNN on Meta’s Detectron dataset, to find the most efficient model for the company's use case. Post that, we built a system to track the objects, and finally pinpoint them.`,
			icon: 'bx bx-briefcase-alt text-[#85586F]'
		},
		{
			title: 'PACE Global Consulting Services',
			role: 'Software Development Engineer - Intern',
			date: 'June 2019 - August 2019',
			event: `Worked on automating a part of the recruitment process for the company. Used a random forest classifier to set up an initial screening process for the resume. The model takes into account the candidate's prior experience, objective and academic performance and then suggests whether the job opening under consideration will be suitable for the candidate or not. Also built a web scraping algorithm to scrape resumes off job application websites. `,
			icon: 'bx bx-briefcase-alt text-[#85586F]'
		},
		{
			title: 'Sasken Technologies',
			role: 'Software Development Engineer - Intern',
			date: 'June 2018 - August 2018',
			event: `Contributed to the development of KenSEWA, an application developed by Sasken Technologies which works as a database management system and finance automation tool for women in rural areas. Worked on developing the UI for this platform using HTML, CSS and  JavaScript for a seamless user experience.
`,
			icon: 'bx bx-briefcase-alt text-[#85586F]'
		}
	];
</script>

<section class="flex flex-col  bg-[#fff0f0] md:p-16 p-8" id="experience">
	<h1 class="text-[#85586F] text-2xl text-center md:mb-24 mb-8">Work Experience</h1>
	{#each events as event, ind}
		<div
			class={ind % 2 !== 0
				? 'flex flex-col md:flex-row-reverse md:mb-0 '
				: 'flex md:flex-row flex-col md:mb-0'}
		>
			<div
				class="flex-col w-full md:w-[45%] bg-[#fff] rounded-md p-4"
				style="box-shadow: 0px 0px 3px 1px rgba(133,88,111,1);"
			>
				<div class="flex justify-between items-center mb-3">
					<div class="flex flex-col">
						<h2 class="text-xl mb-1">{event.title}</h2>
						<p class="text-sm">{event.role}</p>
					</div>
					<h2>{event.date}</h2>
				</div>
				<div class="">
					<p class="text-md text-justify">
						{event.event}
					</p>
				</div>
			</div>
			<div class="md:w-[10%] w-full md:h-auto h-[100px]  flex  justify-center relative">
					<div
						class="absolute md:top-0 top-[30%] flex items-center justify-center z-50 rounded-full bg-white w-[35px] h-[35px] "
						style="box-shadow: 0px 0px 3px 1px rgba(133,88,111,1);"
					>
						<i class={event.icon} />
					</div>
				<div class="absolute border-r-2 h-full" style="border-color:rgba(133, 88, 111,0.3)" />
			</div>
		</div>
	{/each}
	<div class={'flex'}>
		<div
			class="flex-col w-[45%] bg-[#fff] rounded-md p-4 opacity-0"
			style="box-shadow: 0px 0px 3px 1px rgba(133,88,111,1);"
		/>
		<div class="w-[10%] flex justify-center relative">
			<div
				class="absolute flex items-center justify-center z-50 rounded-full bg-white w-[35px] h-[35px] "
				style="box-shadow: 0px 0px 3px 1px rgba(133,88,111,1);"
			/>
		</div>
	</div>
</section>
