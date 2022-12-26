const code = {};

code.default = `<template>
    <h4>按照指定长度省略</h4>
    <ivue-ellipsis :text="text" :length="100"></ivue-ellipsis>
    <h4>Tooltip 形式显示完整的内容</h4>
    <ivue-ellipsis :text="text" :length="100" tooltip></ivue-ellipsis>
</template>

<script setup>
const text =
    '哆啦A梦或多啦A梦，旧时多译为叮当、小叮当，是藤子·F·不二雄的漫画作品《哆啦A梦／多啦A梦》中的主角，黄色有双耳猫型机器人，后变成蓝色猫型机器人。名字的含义为野猫／铜锣+“卫门”';
</script>
`;

code.height = `<template>
    <h4>默认</h4>
    <ivue-ellipsis :text="text" :height="100" style="max-width:800px"></ivue-ellipsis>
    <h4>auto-resize 禁用 不自动根据外层宽度动态改变内容</h4>
    <ivue-ellipsis :text="text" :height="100" :auto-resize="false" style="max-width:800px"></ivue-ellipsis>
</template>

<script setup>
const text =
    '《哆啦A梦》（日语：ドラえもん）或《多啦A梦》（香港正式译名，「多」字不从口）为日本漫画家藤子·F·不二雄笔下著名的儿童、科幻类型日本漫画，自1969年12月[注 4]开始连载[1][2]，共发行单行本45册（未收录作品参见哆啦A梦+）[3][4]、原著大长篇漫画17本（加上其弟子所编绘之大长篇共24本）[5]，至今已成为日本国民级长寿动漫。本作主要叙述一只来自22世纪猫型机器人——哆啦A梦，受原本主人野比世修从未来回到现代，帮助他高祖父野比大雄的故事。本作品在日本、亚洲、部份欧洲、美洲国家知名度极高，作品中亦有渗入当时社会问题[6]。1973年，本作首度由日本电视台动画公司制成动画播放，半年后因该公司倒闭而终止播出。其后由朝日电视台于1979年起制作并播放至今，从1980年起每年3月上映1部动画电影[注 5]。';
</script>
`;

code.lines = `<template>
    <ivue-ellipsis :text="text" :lines="3" tooltip style="width:400px;margin: 0 auto;"></ivue-ellipsis>
</template>

<script setup>
const text =
    '《哆啦A梦》（日语：ドラえもん）或《多啦A梦》（香港正式译名，「多」字不从口）为日本漫画家藤子·F·不二雄笔下著名的儿童、科幻类型日本漫画，自1969年12月[注 4]开始连载[1][2]，共发行单行本45册（未收录作品参见哆啦A梦+）[3][4]、原著大长篇漫画17本（加上其弟子所编绘之大长篇共24本）[5]，至今已成为日本国民级长寿动漫。本作主要叙述一只来自22世纪猫型机器人——哆啦A梦，受原本主人野比世修从未来回到现代，帮助他高祖父野比大雄的故事。本作品在日本、亚洲、部份欧洲、美洲国家知名度极高，作品中亦有渗入当时社会问题[6]。1973年，本作首度由日本电视台动画公司制成动画播放，半年后因该公司倒闭而终止播出。其后由朝日电视台于1979年起制作并播放至今，从1980年起每年3月上映1部动画电影[注 5]。';
</script>
`;

code.slots = `<template>
    <h4>suffix</h4>
    <ivue-ellipsis style="width:400px;margin: 0 auto;" :text="text" :length="100">
        <template #suffix>自定义省略号之后的内容</template>
    </ivue-ellipsis>
    <h4>more</h4>
    <ivue-ellipsis style="width:400px;margin: 0 auto;" :text="text" :length="100">
        <template #more>
            <ivue-icon>more_horiz</ivue-icon>
        </template>
    </ivue-ellipsis>
</template>

<script setup>
const text =
    '《哆啦A梦》（日语：ドラえもん）或《多啦A梦》（香港正式译名，「多」字不从口）为日本漫画家藤子·F·不二雄笔下著名的儿童、科幻类型日本漫画，自1969年12月[注 4]开始连载[1][2]，共发行单行本45册（未收录作品参见哆啦A梦+）[3][4]、原著大长篇漫画17本（加上其弟子所编绘之大长篇共24本）[5]，至今已成为日本国民级长寿动漫。本作主要叙述一只来自22世纪猫型机器人——哆啦A梦，受原本主人野比世修从未来回到现代，帮助他高祖父野比大雄的故事。本作品在日本、亚洲、部份欧洲、美洲国家知名度极高，作品中亦有渗入当时社会问题[6]。1973年，本作首度由日本电视台动画公司制成动画播放，半年后因该公司倒闭而终止播出。其后由朝日电视台于1979年起制作并播放至今，从1980年起每年3月上映1部动画电影[注 5]。';
</script>
`;

export default code;
