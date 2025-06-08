console.log(
    '%cbuild from PakePlus： https://github.com/Sjj1024/PakePlus',
    'color:orangered;font-weight:bolder'
)

// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

document.addEventListener('click', hookClick, { capture: true })

// css filter
document.addEventListener('DOMContentLoaded', () => {
    const targetNode = document.body
    // 配置观察选项
    const config = {
        childList: true,
        subtree: true,
    }
    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const element0 = document.querySelector('#q-app > div.footer.text-grey-14');
                if (element0) {
                    element0.style.display = 'none';
                };const element1 = document.querySelector('#q-app > div.q-layout.q-layout--standard > header > div.q-toolbar.row.no-wrap.items-center.bg-white.text-blue-6 > button:nth-child(2)');
                if (element1) {
                    element1.style.display = 'none';
                };const element2 = document.querySelector('#q-app > div.q-layout.q-layout--standard > header > div.q-toolbar.row.no-wrap.items-center.bg-white.text-blue-6 > button:nth-child(3)');
                if (element2) {
                    element2.style.display = 'none';
                };const element3 = document.querySelector('#q-app > div.q-layout.q-layout--standard > header > div.q-toolbar.row.no-wrap.items-center.bg-white.text-blue-6 > div.q-toolbar__title.ellipsis > div');
                if (element3) {
                    element3.style.display = 'none';
                };const element4 = document.querySelector('#q-app > div.footer.text-grey-14');
                if (element4) {
                    element4.style.display = 'none';
                };const element5 = document.querySelector('#q-app > div.q-layout.q-layout--standard > header > div.q-toolbar.row.no-wrap.items-center.bg-white.text-blue-6 > button:nth-child(2)');
                if (element5) {
                    element5.style.display = 'none';
                };const element6 = document.querySelector('#q-app > div.q-layout.q-layout--standard > header > div.q-toolbar.row.no-wrap.items-center.bg-white.text-blue-6 > button:nth-child(3)');
                if (element6) {
                    element6.style.display = 'none';
                };const element7 = document.querySelector('#q-app > div.q-layout.q-layout--standard > header > div.q-toolbar.row.no-wrap.items-center.bg-white.text-blue-6 > div.q-toolbar__title.ellipsis > div');
                if (element7) {
                    element7.style.display = 'none';
                }
            }
        }
    })
    observer.observe(targetNode, config)
})
// end css filter
