
import styles from '@/components/Home/Home.module.scss'
import Blog from './Blog'

export default function Blogs() {
   const blogs = [
      {
         img: '/blog/asian.jpg',
         href: '/',
         title: 'استایل های زیبای آسیای شرقی',
         position: 'left',
      },
      { img: '/blog/hiphop.jpg', href: '/', title: 'هیپ هاپ و تاثیر آن بر مد', position: 'right' },
      { img: '/blog/summer.jpg', href: '/', title: 'تابستون چی بپوشیم ؟!', position: 'left' },
      { img: '/blog/7sin.jpg', href: '/', title: 'نوروز مبارک !', position: 'right' },
   ]

   return (
      <div className={styles.BlogsContainer}>
         <div className={styles.title}>
            <label>خواندنی ها</label>
            <hr />
         </div>
         <div className={styles.Blogs}>
            {blogs.map((blog, i) => (
               <Blog key={i} data={blog} />
            ))}
         </div>
      </div>
   )
}

