<script>
    export let title
    export let event
    export let url
</script>

<div
    class="relative h-[500px] flex-col bg-[#fff] rounded-md p-4  overflow-hidden hover:scale-110 cursor-pointer"
    style="box-shadow: 0px 0px 3px 1px rgba(133,88,111,1);transition:0.3s ease all"
    on:click={() => window.location.href = url}
>
    <div class="absolute top-0 left-0 right-0 h-[160px] overflow-hidden">
        <img src="sample.jpg" />
        <i class='absolute right-4 top-2 bx bxl-github text-4xl text-[#fff]'></i>
    </div>
    <div class="absolute left-0 right-0 top-[160px] h-[275px] p-1">
        <div class="flex justify-center">
            <div class="flex flex-col">
                <h2 class="text-1xl text-[#85586F] justify-center text-center text-align mt-2">{title}</h2>
            </div>
        </div>
        <div class="">
            <p class="text-md text-justify">
                {event}
            </p>
        </div>
    </div>
</div>