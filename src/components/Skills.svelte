<script>
	let webIcons = [
		'devicon-bootstrap-plain',
		'devicon-html5-plain',
		'devicon-css3-plain',
		'devicon-svelte-plain',
		'devicon-tailwindcss-plain',
		'devicon-javascript-plain'
	];

	let programmingIcons = [
		'devicon-java-plain',
		'devicon-python-plain',
		'devicon-c-plain',
		'devicon-cplusplus-plain'
	];

	let backendIcons = [
		'devicon-mysql-plain',
		'devicon-flask-plain',
		'devicon-postgresql-plain',
		'devicon-mongodb-plain',
		'devicon-tensorflow-plain'
	];

	let devOpsIcons = [
		'devicon-amazonwebservices-plain-wordmark',
		'devicon-docker-plain',
		'devicon-git-plain',
		'devicon-linux-plain',
		'devicon-nginx-original'
	];

	let iconList = [webIcons, backendIcons, programmingIcons, devOpsIcons];

	function changeColor(event, state) {
		if (state) event.target.classList.add('colored');
		else event.target.classList.remove('colored');
	}

	let iconMap = {
		0: 'Frontend',
		1: 'Backend',
		2: 'Programming',
		3: 'DevOps'
	};
</script>

<section class="md:p-16 p-8" id="skills">
	<h1 class="text-[#85586F] text-2xl text-center md:mb-24 mb-8">Skills</h1>

	<div class="flex lg:flex-row flex-col justify-between">
		{#each iconList as devIcons, ind}
			<div class="md:border-2 border-[#85586F]   md:p-8 mb-10">
                <div class="flex flex-col mb-6 items-center">
                    <h1 class="text-[#85586F] text-2xl text-center ">{iconMap[ind]}</h1>
                </div>
				<div class="grid grid-cols-4 gap-2 text-center">
					{#each devIcons as icon}
						<i
							class={icon + ' text-5xl text-[#85586F] cursor-pointer sm:colored'}
							on:focus={(e) => changeColor(e, true)}
							on:mouseover={(e) => changeColor(e, true)}
							on:mouseleave={(e) => changeColor(e, false)}
						/>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
