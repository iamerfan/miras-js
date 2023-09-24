'use client'
import styles from '../Auth/Auth.module.scss'
import { useRouter } from 'next/navigation'
import { FiArrowLeft } from 'react-icons/fi'

export default function BackButton() {
   const router = useRouter()
   const handleBack = () => router.back()
   return (
<button className={styles.BackButton} onClick={handleBack}>
         <FiArrowLeft />
      </button>
   )
}

