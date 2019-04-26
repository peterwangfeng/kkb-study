#!/usr/bin/env node

const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')


function superagent(url) {
    return new Promise((resolve, reject) => {
        request(url, (err, res, body) => {
            const $ = cheerio.load(body)
            let arr = []
            $('.shizhan-course-wrap').each(function () {
                let obj = {}
                obj.name = $(this).find('.shizan-name').text()
                obj.desc = $(this).find('.shizan-desc').text()
                obj.price = $(this).find('.course-card-price').text()
                obj.teacher = $(this).find('.lecturer-info span').text()
                obj.grade = $(this).find('.grade').text()
                obj.rate = $(this).find('span.r').text()
                obj.watch = $(this).find('.grade + span').text()

                arr.push(obj)
            })
            resolve(arr)
        })
    })
}
let ps = []

for (let i = 1; i <= 3; i++) {
    let url = `https://coding.imooc.com/?c=${process.argv[2] || 'fe'}&sort=0&unlearn=0&page=${i}`
    ps.push(superagent(url))
}

get()
async function get() {
    console.time('one')
    let [a, b, c] = await Promise.all(ps)
    console.timeEnd('one')
    let pahtname = path.join(process.cwd(), 'imooc.json')
    fs.writeFile(pahtname, JSON.stringify([...a,...b]), (err) => {
        if (!err) {
            // console.log('success')
        }
    })
    for (let item of [...a, ...b, ...c]) {
        let s = []
        for (let key in item) {
            s.push(`"${item[key]}"`)
        }
    }
}