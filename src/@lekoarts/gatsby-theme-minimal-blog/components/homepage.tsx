/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/SRC/utils/replaceSlashes"
// @ts-ignore
import Hero from "../texts/hero"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
  [key: string]: any
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()

  return (
    <Layout>
      <section sx={{ mb: [5, 6, 6], p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <Hero />
      </section>
      <Title text="最近博客">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>查看所有博客</Link>
      </Title>
      <Listing posts={posts} showTags={false} />
    </Layout>
  )
}

export default Homepage
