import Link from "next/link";
import Navbar from "./navbar";

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
};
const Blog = ({ data }) => {
    return (
        <>
            <Navbar />
            {
                data.map((curElem) => {
                    return (
                        <div key={curElem.id}>
                            <h3>{curElem.id}</h3>
                            <Link href={`/blogpost/${curElem.id}`}>
                                <h3>{curElem.title}</h3></Link>
                        </div>
                    )
                })
            }
        </>
    )
}
export default Blog;