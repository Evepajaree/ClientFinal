import Link from 'next/link'
import styles from '../styles/menu.module.css'
const Navbar = () => (
    <div className={styles.ul}>
        <ul>
        <Link href="/register"><a> ลงทะเบียน </a></Link>  |
        <Link href="/login"><a> เข้าสู่ระบบ </a></Link> | 
        <Link href="/"><a> หน้าหลัก </a></Link> |
        <Link href="/profile"><a> เกี่ยวกับเรา </a></Link> |
        <Link href="/shops"><a> รายการสินค้า </a></Link> |
        <Link href="/admin"><a> เพิ่มรายการ </a></Link> |
        <Link href="/help"><a> ช่วยเหลือ </a></Link> | 
        <Link href="/getConfig"><a> แจ้งโอนเงิน/ส่งสลิป </a></Link> | 
        <Link href="/comment"><a> แสดงความคิดเห็น </a></Link> |
        <Link href="/logout"><a> Logout </a></Link> 
        </ul>
    </div>
)

export default Navbar
