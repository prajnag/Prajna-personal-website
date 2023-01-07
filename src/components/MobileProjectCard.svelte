<script>
    export let title
    export let event
    export let url
</script>

<div
    class="relative md:h-[475px] flex-col bg-[#fff] rounded-md md:p-4  overflow-hidden hover:scale-110 cursor-pointer"
    style="transition:0.3s ease all"
>
    <div class="md:p-4 overflow-hidden"
    on:click={() => window.location.href = url}
    >
        <div class="flex justify-center text-center items-center border-2 border-[#85586F]">
            <div class="flex flex-col items-center  p-2">
                <i class='bx bxl-github text-3xl text-[#85586F]' style="font-size:40px"></i>
                <p class="text-sm text-bold mt-2 text-[#85586F]">{title}</p>
            </div>
        </div>
        <div class="hidden">
            <p class="text-md">
                {event}
            </p>
        </div>
    </div>
</div>