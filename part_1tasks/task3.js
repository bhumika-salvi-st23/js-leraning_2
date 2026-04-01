const tasks = ["laundary", "report", "book", "walk"]
function* takegen() {
    for (let t of tasks)
        yield t
}

const gen = takegen()
const done = []
function nextask() {
    const r = gen.next()
    console.log(r.done ? "all done!!" : `next:${r.value}`)
}
function markdone(task) {
    if (!done.includes(task)) done.push(task)
    console.log(`done tasks:${done.length}, remaining${tasks.length - done.length}`)

}

nextask()
markdone("laundary")
nextask()