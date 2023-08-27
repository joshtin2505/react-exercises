import { useEffect, useState } from "react"
const CAT_ENDPOINT_IMAGE_URL = (firstWord) => `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function useCatImg({ fact }) {

    const [imgUrl, setImgUrl] = useState()

    useEffect(() => {
        if (!fact) return

        const firstWord = fact.split(' ', 3).join(' ')
        console.log(firstWord)

        fetch(CAT_ENDPOINT_IMAGE_URL(firstWord))
            .then(res => res.json())
            .then(data => setImgUrl('https://cataas.com/' + data.url))

    }, [fact])
    return { imgUrl }
}