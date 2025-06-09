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
                const element0 = document.querySelector('body > div.manual-reader.manual-container > header > div > div > nav > ul > li:nth-child(6)');
                if (element0) {
                    element0.style.display = 'none';
                };const element1 = document.querySelector('body > div.manual-reader.manual-container > header > div > div > nav > ul > li:nth-child(7)');
                if (element1) {
                    element1.style.display = 'none';
                };const element2 = document.querySelector('body > div.manual-reader.manual-container > div > div.panel.panel-default.panel-recommend > div.panel-heading');
                if (element2) {
                    element2.style.display = 'none';
                };const element3 = document.querySelector('body > div.manual-reader.manual-container > div > div.panel.panel-default.panel-recommend > div.panel-body > div:nth-child(2)');
                if (element3) {
                    element3.style.display = 'none';
                };const element4 = document.querySelector('body > div.manual-reader.manual-container > header > div > div > nav > ul > li:nth-child(3)');
                if (element4) {
                    element4.style.display = 'none';
                }
            }
        }
    })
    observer.observe(targetNode, config)
})
// end css filter
