<script>
	import { navState } from './stores.js';

	const tabs = ['About Me', 'Work Experience', 'Skills', 'Research Projects'];

	let activeTab = 'About Me';

	function detectWindowScrollDistance() {
		let about = document.getElementById('about-me').getBoundingClientRect().bottom;
		let experience = document.getElementById('experience').getBoundingClientRect().bottom;
		let skills = document.getElementById('skills').getBoundingClientRect().bottom;
		let projects = document.getElementById('projects').getBoundingClientRect().bottom;

		let order = [about, experience, skills, projects].filter((ele) => ele > 0);

		activeTab = tabs[tabs.length - order.length];

		console.log(activeTab);
	}

	let linkMap = {
		'About Me': 'about-me',
		'Work Experience': 'experience',
		Skills: 'skills',
		'Research Projects': 'projects'
	};

	function scrollToSection(tab) {
		navState.set(0);
		document.getElementById(tab).scrollIntoView();
	}
</script>

{#if $navState}
	<div
		class="fixed drop-shadow-lg md:w-[25vw] w-full h-screen top-0 bg-[#F4BFBF] flex flex-col items-center justify-start p-8"
		style="z-index:1000"
	>
		<div class="absolute top-[10px] right-[10px]" on:click={() => navState.set(0)}>
			<i class="bx bx-x text-5xl text-[#85586F]" />
		</div>
		<h1 class="font-light mt-8 text-[#fff] tracking-tighter" style="font-size:72px">
			Prajna Girish
		</h1>
		<div class="mb-4 flex justify-between w-[50%]">
			<a href="https://github.com/prajnag"><i class="bx bxl-github text-3xl text-[#85586F]" /></a>
			<a href="https://www.linkedin.com/in/prajna-girish-5735971b0/"><i class="bx bxl-linkedin text-3xl text-[#85586F]" /></a>
			<a href=""><i class="bx bx-file text-3xl text-[#85586F]" /></a>
			<a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=prajna2310@gmail.com"><i class="bx bxl-gmail text-3xl text-[#85586F]" /></a>	
		</div>
		<div class="h-[2px] w-[75%] bg-[#85586F]" />
		<div class="tabs mt-16 flex flex-col justify-center">
			<!-- <p class="mb-3 text-[#85586F] text-5xl">Misc</p> -->
			{#each tabs as tab}
				{#if activeTab === tab}
					<p
						class="mb-3 cursor-pointer text-[#85586F] text-4xl "
						on:click={() => scrollToSection(linkMap[tab])}
					>
						{tab}
					</p>
				{:else}
					<p
						class="text-4xl cursor-pointer mb-3 text-white"
						on:click={() => scrollToSection(linkMap[tab])}
					>
						{tab}
					</p>
				{/if}
			{/each}
		</div>
	</div>
{:else}
	<div
		class="fixed drop-shadow-lg md:w-[25vw] w-full top-0 bg-[#F4BFBF] flex items-center justify-between py-2 px-4"
	>
		<h1 class="font-light text-[#fff] tracking-tighter pt-2" style="font-size:32px">Prajna Girish</h1>
		<i class="bx bx-menu text-5xl text-[#85586F]" on:click={() => navState.set(1)} />
	</div>
{/if}

<svelte:window on:scroll={detectWindowScrollDistance} />
