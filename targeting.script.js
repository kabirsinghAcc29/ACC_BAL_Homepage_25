return (async conditions => {
    let wait = 20;
    while (wait--) {
        let c = await Promise.allSettled(conditions.map(f => f())).catch(() => { }) || [];
        if (c.filter(({ value }) => !!value).length === conditions.length) return !0;
        await new Promise(r => setTimeout(r, 150));
    }
    throw new Error();
})([
    () => {
        return /^en\b/i.test(document.querySelector('html[lang]')?.getAttribute('lang'));
    }
]);