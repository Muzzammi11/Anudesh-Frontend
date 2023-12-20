"use client";
import "./home.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    return (
        <>
            <div className="pb-40 bg-gradient-to-tl from-orange-light to-orange-dark-100">
                <div className="pt-8 pb-16 flex justify-between px-16">
                    <Image alt="Anudesh" src="https://i.imgur.com/56Ut9oz.png" width="90px"></Image>
                    <div className="flex gap-6">
                        <button className="text-xl font-medium hover:underline">Codebase</button>
                        <button className="text-xl font-medium hover:underline">Analytics</button>
                    </div>
                </div>
                <div className="flex items-center align-middle">
                    <div className="px-40">
                        <div className="text-orange-600 text-6xl mb-16 font-medium">Anudesh : An Initiative to source better data by AI4Bharat</div>
                        <div className="text-orange-600 text-3xl mb-16">Contribute to the development of state of the art LLMs for Indian languages by helping us create high quality conversational data.</div>
                        <div className="flex gap-8">
                            <button className="bg-orange-600 text-white text-xl p-4 rounded-md hover:bg-white hover:text-orange-600 border border-orange-600">Demo Video</button>
                            <button onClick={() => router.push("/login")} className="text-orange-600 bg-white text-xl p-4 rounded-md border border-orange-600 hover:bg-orange-600 hover:text-white">Sign In/Sign Up</button>
                        </div>
                    </div>
                    <div className="pr-40">
                        <Image alt="Anudesh" src="https://i.imgur.com/56Ut9oz.png" width="900px"></Image>
                    </div>
                </div>
            </div>
            <div className="text-center py-20">
                <div className="text-orange-600 text-6xl font-medium">How it Works?</div>
                <div className="flex pt-20">
                    <svg className="px-40" width="1800" viewBox="0 0 439 310" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_253_35)">
                            <path d="M65.0812 219.75C64.721 219.217 64.2457 218.769 63.6886 218.435C63.1316 218.101 62.5064 217.891 61.8571 217.819C61.2078 217.746 60.5502 217.814 59.9307 218.017C59.3111 218.22 58.7446 218.553 58.271 218.993L44.1556 211.877L45.0331 219.893L58.3028 225.422C59.1121 226.15 60.1667 226.562 61.2667 226.582C62.3668 226.601 63.4358 226.226 64.2714 225.526C65.1069 224.827 65.6508 223.853 65.8001 222.789C65.9493 221.724 65.6936 220.643 65.0812 219.75Z" fill="#A0616A" />
                            <path d="M52.5368 222.977C52.2814 223.091 52.0042 223.152 51.7232 223.155C51.4422 223.158 51.1637 223.103 50.9059 222.994L37.4983 217.313C32.9139 215.372 29.2077 211.87 27.069 207.459L20.0203 192.927C19.5001 192.274 19.1167 191.528 18.8921 190.73C18.6675 189.933 18.6061 189.1 18.7113 188.279C18.8166 187.458 19.0864 186.666 19.5055 185.947C19.9245 185.228 20.4845 184.597 21.1534 184.09C21.8224 183.583 22.5871 183.209 23.404 182.991C24.2208 182.773 25.0737 182.714 25.9139 182.817C26.7542 182.921 27.5652 183.186 28.3006 183.596C29.0361 184.006 29.6815 184.554 30.2001 185.208L42.59 207.659L54.0305 216.1C54.3579 216.343 54.6012 216.678 54.7273 217.06C54.8534 217.442 54.8564 217.853 54.7357 218.237L53.6128 221.779C53.4922 222.159 53.256 222.494 52.9355 222.739C52.8127 222.834 52.6788 222.913 52.5368 222.977Z" fill="#CCCCCC" />
                            <path d="M19.71 175.837C25.7398 175.837 30.6279 171.063 30.6279 165.174C30.6279 159.285 25.7398 154.51 19.71 154.51C13.6803 154.51 8.79224 159.285 8.79224 165.174C8.79224 171.063 13.6803 175.837 19.71 175.837Z" fill="#A0616A" />
                            <path d="M24.1324 305.058L29.5818 305.057L32.1747 284.527L24.1311 284.527L24.1324 305.058Z" fill="#A0616A" />
                            <path d="M40.0923 309.999L22.9647 310L22.9644 303.537L33.4745 303.536C35.2296 303.536 36.9128 304.217 38.1539 305.429C39.3949 306.641 40.0922 308.285 40.0923 309.999Z" fill="#2F2E41" />
                            <path d="M6.35168 305.058L11.801 305.057L14.3939 284.527L6.35034 284.527L6.35168 305.058Z" fill="#A0616A" />
                            <path d="M22.3115 309.999L5.18393 310L5.18363 303.537L15.6937 303.536C17.4488 303.536 19.132 304.217 20.3731 305.429C21.6142 306.641 22.3114 308.285 22.3115 309.999Z" fill="#2F2E41" />
                            <path d="M4.44865 299.181C4.26088 298.972 4.1211 298.725 4.03868 298.459C3.95627 298.192 3.93312 297.912 3.9708 297.636L13.5122 227.743L37.2177 231.675L39.7476 230.192L33.2055 296.507C33.151 296.955 32.9402 297.371 32.6085 297.684C32.2768 297.998 31.8445 298.19 31.3846 298.228L24.2067 298.812C23.9213 298.836 23.6341 298.799 23.3646 298.704C23.0951 298.61 22.8494 298.46 22.6443 298.265C22.4392 298.07 22.2795 297.834 22.1758 297.573C22.0721 297.312 22.027 297.033 22.0435 296.754L23.9018 265.172C23.9051 265.118 23.8879 265.066 23.8535 265.024C23.8191 264.982 23.77 264.954 23.7157 264.945C23.6614 264.936 23.6057 264.948 23.5595 264.977C23.5132 265.006 23.4797 265.051 23.4654 265.103L14.2713 298.403C14.1564 298.817 13.905 299.183 13.556 299.444C13.207 299.705 12.7797 299.847 12.34 299.848H5.95368C5.66864 299.848 5.38689 299.788 5.12732 299.673C4.86775 299.558 4.63636 299.39 4.44865 299.181Z" fill="#2F2E41" />
                            <path d="M20.8657 232.635C20.5936 232.395 20.2438 232.255 19.8771 232.24C19.5104 232.225 19.1499 232.336 18.8582 232.554L14.1188 236.154C13.8609 236.351 13.5576 236.482 13.2354 236.537C12.9133 236.593 12.5821 236.57 12.2711 236.471C11.9601 236.372 11.6786 236.2 11.4515 235.97C11.2244 235.741 11.0585 235.46 10.9684 235.153C8.64364 227.201 3.37672 207.185 4.67424 193.097C5.40972 185.112 12.4698 179.043 20.4124 179.553C25.8424 179.906 29.4148 182.966 31.0301 188.646C34.9964 202.592 39.3552 228.173 40.1887 233.16C40.2545 233.547 40.199 233.944 40.0295 234.3C39.86 234.655 39.5844 234.952 39.239 235.152C36.9966 236.467 34.4345 237.171 31.8191 237.192C28.6545 237.192 24.8601 236.115 20.8657 232.635Z" fill="#CCCCCC" />
                            <path d="M22.654 237.596C22.7071 236.96 22.6167 236.32 22.3892 235.722C22.1618 235.124 21.8027 234.581 21.3375 234.133C20.8722 233.685 20.3119 233.342 19.6962 233.128C19.0805 232.914 18.4243 232.835 17.7737 232.896L11.1629 218.789L6.78821 225.625L13.7366 237.974C13.9135 239.034 14.4825 239.995 15.3359 240.673C16.1893 241.351 17.2677 241.7 18.3669 241.653C19.4661 241.607 20.5096 241.168 21.2998 240.42C22.0899 239.673 22.5718 238.668 22.654 237.596Z" fill="#A0616A" />
                            <path d="M10.7444 232.574C10.4711 232.51 10.2147 232.391 9.99174 232.224C9.76879 232.057 9.58434 231.846 9.45037 231.605L2.48958 219.054C0.109091 214.763 -0.594549 209.773 0.509543 205.013L4.14502 189.33C4.14831 188.503 4.31847 187.685 4.64575 186.922C4.97303 186.16 5.45102 185.467 6.0524 184.885C6.65378 184.303 7.36675 183.842 8.15056 183.529C8.93437 183.216 9.77364 183.057 10.6204 183.061C11.4672 183.065 12.3048 183.232 13.0854 183.553C13.8661 183.873 14.5744 184.341 15.1699 184.929C15.7655 185.517 16.2365 186.213 16.5562 186.979C16.8758 187.745 17.0378 188.565 17.0328 189.392L12.5958 214.526L16.2647 228.064C16.3691 228.452 16.3487 228.862 16.2065 229.239C16.0644 229.616 15.8071 229.941 15.4697 230.17L12.3478 232.281C12.0129 232.507 11.6154 232.628 11.2082 232.628C11.052 232.628 10.8963 232.61 10.7444 232.574Z" fill="#CCCCCC" />
                            <path opacity="0.2" d="M16.1471 199.992L12.1465 216.49L17.9252 230.383L13.9246 216.924L16.1471 199.992Z" fill="black" />
                            <path d="M13.4798 173.942C12.5087 173.96 11.5436 173.789 10.6403 173.441C10.2428 173.291 9.83025 173.168 9.43354 173.018C5.92998 171.696 3.62206 168.052 3.5394 164.385C3.45674 160.717 5.40134 157.157 8.28891 154.811C11.1765 152.466 14.9166 151.261 18.6617 150.983C22.6958 150.683 27.2383 151.682 29.4926 154.963C30.0926 155.836 30.5122 156.896 30.1567 157.951C30.0502 158.269 29.86 158.554 29.6051 158.778C28.5984 159.653 27.5948 158.995 26.5685 158.937C25.158 158.857 23.8911 159.972 23.4357 161.279C22.9803 162.585 23.1808 164.023 23.5485 165.356C23.8285 166.158 24.0051 166.99 24.0741 167.835C24.1038 168.258 24.0222 168.682 23.8372 169.066C23.6522 169.45 23.3698 169.782 23.0168 170.029C22.1354 170.55 20.9778 170.249 20.0958 169.729C19.2139 169.21 18.4518 168.487 17.4992 168.105C16.5465 167.723 15.2666 167.807 14.7121 168.655C14.5359 168.964 14.4166 169.3 14.3598 169.649C13.8627 171.861 13.9769 171.73 13.4798 173.942Z" fill="#2F2E41" />
                            <path d="M336.648 100.064H66.8261C65.7984 100.065 64.8129 100.464 64.0862 101.174C63.3594 101.884 62.9507 102.846 62.9498 103.85V282.428C62.9507 283.431 63.3594 284.394 64.0862 285.104C64.8129 285.813 65.7984 286.213 66.8261 286.213H336.648C337.209 286.213 337.763 286.095 338.271 285.865C338.78 285.636 339.232 285.301 339.595 284.885C339.626 284.852 339.655 284.818 339.68 284.781C339.911 284.504 340.099 284.196 340.236 283.865C340.431 283.41 340.53 282.921 340.529 282.428V171.262H339.422V282.428C339.422 282.956 339.263 283.472 338.964 283.912C338.698 284.3 338.338 284.616 337.915 284.833C337.524 285.03 337.089 285.133 336.648 285.132H66.8261C66.0919 285.132 65.388 284.846 64.8688 284.339C64.3496 283.832 64.0575 283.145 64.0566 282.428V103.85C64.0575 103.133 64.3495 102.446 64.8688 101.939C65.388 101.432 66.0919 101.146 66.8261 101.145H336.648C337.383 101.145 338.088 101.43 338.608 101.937C339.128 102.445 339.421 103.133 339.422 103.85V127.846H340.529V103.85C340.528 102.846 340.118 101.883 339.391 101.173C338.663 100.463 337.677 100.064 336.648 100.064Z" fill="#3F3D56" />
                            <path d="M339.972 115.24H63.5016V116.322H339.972V115.24Z" fill="#3F3D56" />
                            <path d="M72.9204 111.43C74.7564 111.43 76.2447 109.976 76.2447 108.183C76.2447 106.39 74.7564 104.936 72.9204 104.936C71.0845 104.936 69.5961 106.39 69.5961 108.183C69.5961 109.976 71.0845 111.43 72.9204 111.43Z" fill="#CCCCCC" />
                            <path d="M82.4778 111.43C84.3138 111.43 85.8021 109.976 85.8021 108.183C85.8021 106.39 84.3138 104.936 82.4778 104.936C80.6418 104.936 79.1535 106.39 79.1535 108.183C79.1535 109.976 80.6418 111.43 82.4778 111.43Z" fill="#CCCCCC" />
                            <path d="M92.0351 111.43C93.8711 111.43 95.3594 109.976 95.3594 108.183C95.3594 106.39 93.8711 104.936 92.0351 104.936C90.1992 104.936 88.7108 106.39 88.7108 108.183C88.7108 109.976 90.1992 111.43 92.0351 111.43Z" fill="#CCCCCC" />
                            <path d="M158.807 264.325C157.662 264.32 156.537 264.036 155.534 263.499C154.53 262.962 153.679 262.19 153.058 261.251C152.437 260.312 152.066 259.236 151.978 258.122C151.89 257.008 152.088 255.889 152.554 254.869L160.474 237.611C154.236 232.223 149.245 225.599 145.831 218.181C142.417 210.763 140.659 202.721 140.674 194.588C140.674 162.814 167.141 136.963 199.674 136.963C232.206 136.963 258.673 162.814 258.673 194.588C258.673 226.361 232.206 252.212 199.674 252.212C193.983 252.206 188.323 251.392 182.872 249.795L162.66 263.159C161.524 263.916 160.182 264.322 158.807 264.325ZM199.674 145.004C189.145 144.998 178.875 148.191 170.287 154.141C161.7 160.092 155.22 168.503 151.747 178.211C148.274 187.919 147.978 198.442 150.902 208.321C153.826 218.2 159.825 226.946 168.066 233.346L170.56 235.289L162.039 253.86L181.594 240.93L183.525 241.563C190.5 243.852 197.901 244.632 205.216 243.849C212.53 243.066 219.583 240.739 225.885 237.03C232.188 233.32 237.589 228.316 241.714 222.365C245.839 216.414 248.591 209.658 249.777 202.565C250.963 195.472 250.556 188.212 248.584 181.288C246.612 174.365 243.122 167.942 238.355 162.467C233.589 156.991 227.661 152.594 220.982 149.578C214.303 146.563 207.032 145.002 199.674 145.004Z" fill="#3F3D56" />
                            <path d="M199.674 199.948C204.22 199.948 207.906 196.348 207.906 191.907C207.906 187.467 204.22 183.867 199.674 183.867C195.127 183.867 191.441 187.467 191.441 191.907C191.441 196.348 195.127 199.948 199.674 199.948Z" fill="#3F3D56" />
                            <path d="M176.348 199.948C180.895 199.948 184.581 196.348 184.581 191.907C184.581 187.467 180.895 183.867 176.348 183.867C171.802 183.867 168.116 187.467 168.116 191.907C168.116 196.348 171.802 199.948 176.348 199.948Z" fill="#3F3D56" />
                            <path d="M222.999 199.948C227.546 199.948 231.231 196.348 231.231 191.907C231.231 187.467 227.546 183.867 222.999 183.867C218.452 183.867 214.766 187.467 214.766 191.907C214.766 196.348 218.452 199.948 222.999 199.948Z" fill="#3F3D56" />
                            <path d="M406.695 160.083H328.459C327.516 160.083 326.612 159.717 325.945 159.066C325.278 158.414 324.903 157.531 324.903 156.61C324.903 155.689 325.278 154.805 325.945 154.154C326.612 153.503 327.516 153.137 328.459 153.137H406.695C407.638 153.137 408.542 153.503 409.209 154.154C409.876 154.805 410.251 155.689 410.251 156.61C410.251 157.531 409.876 158.414 409.209 159.066C408.542 159.717 407.638 160.083 406.695 160.083Z" fill="#CCCCCC" />
                            <path d="M355.575 145.322H328.459C327.516 145.322 326.612 144.956 325.945 144.304C325.278 143.653 324.903 142.77 324.903 141.848C324.903 140.927 325.278 140.044 325.945 139.393C326.612 138.741 327.516 138.375 328.459 138.375H355.575C356.518 138.375 357.423 138.741 358.09 139.393C358.757 140.044 359.131 140.927 359.131 141.848C359.131 142.77 358.757 143.653 358.09 144.304C357.423 144.956 356.518 145.322 355.575 145.322Z" fill="#CCCCCC" />
                            <path d="M293.024 164.315C301.371 164.315 308.138 157.706 308.138 149.554C308.138 141.402 301.371 134.793 293.024 134.793C284.677 134.793 277.91 141.402 277.91 149.554C277.91 157.706 284.677 164.315 293.024 164.315Z" fill="#EE6633" />
                            <path d="M414.537 126.978H273.625C271.621 126.981 269.701 127.759 268.284 129.143C266.868 130.526 266.071 132.402 266.068 134.359V164.749C266.071 166.706 266.868 168.582 268.284 169.965C269.701 171.349 271.621 172.127 273.625 172.13H414.537C416.54 172.127 418.46 171.349 419.877 169.965C421.294 168.582 422.091 166.706 422.093 164.749V134.359C422.091 132.402 421.294 130.526 419.877 129.143C418.46 127.759 416.54 126.981 414.537 126.978ZM421.204 164.749C421.202 166.476 420.499 168.131 419.249 169.352C417.999 170.573 416.304 171.26 414.537 171.262H273.625C271.857 171.26 270.162 170.573 268.912 169.352C267.662 168.131 266.959 166.476 266.957 164.749V134.359C266.959 132.632 267.662 130.977 268.912 129.756C270.162 128.535 271.857 127.848 273.625 127.846H414.537C416.304 127.848 417.999 128.535 419.249 129.756C420.499 130.977 421.202 132.632 421.204 134.359V164.749Z" fill="#3F3D56" />
                            <path d="M421.204 139.134C426.851 139.134 431.428 134.663 431.428 129.149C431.428 123.634 426.851 119.163 421.204 119.163C415.558 119.163 410.981 123.634 410.981 129.149C410.981 134.663 415.558 139.134 421.204 139.134Z" fill="#EE6633" />
                            <path d="M420.89 134.764C420.849 134.724 420.816 134.676 420.794 134.624C420.771 134.571 420.76 134.514 420.76 134.457V123.406C420.76 123.29 420.807 123.18 420.89 123.099C420.973 123.017 421.087 122.971 421.204 122.971C421.322 122.971 421.435 123.017 421.519 123.099C421.602 123.18 421.649 123.29 421.649 123.406V134.457C421.649 134.543 421.623 134.627 421.574 134.699C421.525 134.77 421.456 134.826 421.375 134.858C421.293 134.891 421.204 134.9 421.118 134.883C421.031 134.866 420.952 134.825 420.89 134.764Z" fill="white" />
                            <path d="M415.232 129.239C415.17 129.178 415.128 129.1 415.111 129.016C415.094 128.932 415.102 128.845 415.136 128.765C415.17 128.686 415.227 128.618 415.3 128.571C415.373 128.523 415.459 128.497 415.547 128.497H426.862C426.98 128.497 427.093 128.543 427.177 128.625C427.26 128.706 427.307 128.816 427.307 128.932C427.307 129.047 427.26 129.157 427.177 129.239C427.093 129.32 426.98 129.366 426.862 129.366H415.547C415.488 129.366 415.43 129.355 415.377 129.333C415.323 129.311 415.274 129.279 415.232 129.239Z" fill="white" />
                            <path d="M433.444 261.873H412.102C412.102 262.472 390.108 262.959 390.108 262.959C389.762 263.212 389.448 263.504 389.17 263.827C388.334 264.8 387.878 266.03 387.88 267.3V268.168C387.881 269.608 388.467 270.988 389.509 272.005C390.55 273.023 391.963 273.595 393.437 273.595H433.444C434.917 273.594 436.329 273.022 437.371 272.004C438.413 270.987 438.999 269.607 439 268.168V267.3C438.998 265.861 438.412 264.482 437.37 263.465C436.329 262.448 434.917 261.875 433.444 261.873Z" fill="#3F3D56" />
                            <path d="M416.55 273.38H410.771V309.849H416.55V273.38Z" fill="#3F3D56" />
                            <path d="M432.997 309.651C432.997 310.26 424.24 309.887 413.438 309.887C402.636 309.887 393.879 310.26 393.879 309.651C393.879 309.041 402.636 304.205 413.438 304.205C424.24 304.205 432.997 309.041 432.997 309.651Z" fill="#3F3D56" />
                            <path d="M415.514 213.001C422.388 213.001 427.961 207.558 427.961 200.845C427.961 194.131 422.388 188.688 415.514 188.688C408.64 188.688 403.068 194.131 403.068 200.845C403.068 207.558 408.64 213.001 415.514 213.001Z" fill="#2F2E41" />
                            <path d="M384.54 304.854L379.09 304.854L376.498 284.323L384.541 284.324L384.54 304.854Z" fill="#FFB8B8" />
                            <path d="M375.198 303.333H385.708V309.796H368.58C368.58 308.082 369.277 306.438 370.518 305.226C371.759 304.014 373.443 303.333 375.198 303.333Z" fill="#2F2E41" />
                            <path d="M376.033 301.883L370.834 300.289L374.653 279.943L382.327 282.295L376.033 301.883Z" fill="#FFB8B8" />
                            <path d="M367.586 297.7L377.614 300.774L375.632 306.94L359.29 301.932C359.816 300.296 360.985 298.932 362.541 298.138C364.096 297.344 365.911 297.187 367.586 297.7Z" fill="#2F2E41" />
                            <path d="M418.848 258.314C418.723 257.28 418.496 256.259 418.173 255.266L417.155 254.016L414.505 250.769L414.39 250.773C414.194 250.782 413.381 250.825 412.123 250.921H412.109C411.332 250.981 410.38 251.059 409.3 251.159C409.016 251.19 408.718 251.216 408.411 251.246V255.779H413.968C414.238 255.779 414.498 255.875 414.701 256.049C414.904 256.224 415.035 256.464 415.07 256.725C415.074 256.773 415.079 256.816 415.079 256.864C415.079 257.152 414.962 257.428 414.753 257.632C414.545 257.835 414.262 257.949 413.968 257.95H381.696C381.284 258.216 380.889 258.506 380.513 258.818C379.376 259.677 378.557 260.875 378.179 262.23C376.295 270.323 372.859 285.414 371.845 289.847C371.771 290.181 371.788 290.528 371.893 290.854C371.999 291.179 372.189 291.473 372.445 291.705C372.634 291.878 372.856 292.012 373.099 292.1L377.108 293.568C377.273 293.627 377.445 293.667 377.619 293.685C377.641 293.685 377.659 293.689 377.682 293.689C377.723 293.693 377.764 293.694 377.806 293.694C378.211 293.692 378.607 293.571 378.941 293.346C379.275 293.122 379.531 292.804 379.677 292.435L382.842 284.325L387.719 271.821L389.648 266.876C391.884 267.388 410.643 271.443 416.924 264.909C417.543 264.265 418.032 263.512 418.364 262.691C418.892 261.293 419.059 259.79 418.848 258.314Z" fill="#2F2E41" />
                            <path d="M424.289 259.495C424.191 259.109 424.08 258.709 423.951 258.306L420.284 253.808L420.169 253.812C419.937 253.825 418.839 253.882 417.155 254.016C415.243 254.172 412.572 254.424 409.571 254.819C409.482 254.828 409.389 254.841 409.3 254.854C409.007 254.893 408.709 254.932 408.411 254.976V255.779H413.968C414.238 255.779 414.498 255.875 414.701 256.049C414.904 256.224 415.035 256.464 415.07 256.725C415.074 256.773 415.079 256.816 415.079 256.864C415.079 257.152 414.962 257.428 414.753 257.632C414.545 257.835 414.262 257.949 413.968 257.95H394.329C393.471 258.223 392.644 258.51 391.853 258.818C387.701 260.424 384.594 262.53 383.958 265.269C383.745 266.19 383.509 267.201 383.26 268.278C382.336 272.281 381.211 277.183 380.193 281.637V281.641C379.984 282.562 379.775 283.456 379.575 284.325C378.726 288.058 378.006 291.223 377.624 292.886C377.615 292.934 377.606 292.977 377.597 293.025V293.034C377.553 293.37 377.596 293.712 377.722 294.028L377.726 294.032V294.037C377.848 294.339 378.047 294.607 378.304 294.814C378.476 294.952 378.669 295.062 378.877 295.139L382.887 296.607C383.11 296.688 383.346 296.731 383.585 296.733C383.919 296.734 384.248 296.651 384.54 296.494C384.961 296.272 385.285 295.91 385.456 295.474L394.089 273.349L395.427 269.915C397.663 270.427 416.421 274.478 422.702 267.948C423.943 266.636 424.651 264.927 424.694 263.142C424.738 261.914 424.601 260.686 424.289 259.495Z" fill="#2F2E41" />
                            <path d="M423.796 221.194C423.725 221.111 423.649 221.029 423.569 220.951C422.385 219.735 420.923 218.81 419.303 218.253C417.683 217.695 415.95 217.52 414.248 217.742C412.762 217.933 411.291 218.216 409.842 218.589C407.972 219.059 406.259 219.997 404.873 221.311C403.793 222.333 402.943 223.564 402.376 224.924C401.809 226.284 401.537 227.745 401.579 229.213C401.597 229.807 401.601 230.415 401.592 231.032C401.592 231.318 401.588 231.609 401.583 231.9H405.966C406.156 231.9 406.346 231.921 406.531 231.965C407.066 232.09 407.542 232.387 407.883 232.808C408.224 233.23 408.41 233.751 408.411 234.288V254.485C408.709 254.567 409.007 254.65 409.3 254.737C409.394 254.767 409.482 254.793 409.571 254.819C409.674 254.85 409.776 254.88 409.874 254.91C410.776 255.184 411.657 255.473 412.518 255.779H413.968C414.238 255.779 414.498 255.875 414.701 256.049C414.904 256.223 415.035 256.464 415.07 256.725C415.372 256.842 415.666 256.96 415.954 257.077C416.981 257.494 417.955 257.91 418.848 258.314C420.053 258.853 421.124 259.365 422.022 259.812C422.305 259.953 422.617 260.027 422.933 260.029C423.35 260.028 423.754 259.897 424.089 259.656C424.159 259.606 424.225 259.552 424.289 259.495C424.527 259.277 424.707 259.006 424.813 258.705C424.919 258.404 424.948 258.082 424.898 257.767C424.439 254.357 424.305 250.912 424.498 247.478C424.623 244.59 424.889 241.63 425.236 238.768C425.423 237.218 425.632 235.699 425.85 234.236C426.059 232.838 426.281 231.496 426.499 230.229C426.784 228.621 426.689 226.971 426.221 225.405C425.752 223.839 424.923 222.398 423.796 221.194Z" fill="#EE6633" />
                            <path d="M405.575 221.55C405.347 221.454 405.112 221.374 404.873 221.311C403.688 221 402.428 221.114 401.323 221.635C400.218 222.155 399.342 223.047 398.854 224.146L395.8 231.032L395.418 231.9H405.966C406.156 231.9 406.346 231.921 406.531 231.965L406.886 231.162L408.238 228.114C408.774 226.899 408.796 225.525 408.296 224.294C407.797 223.064 406.819 222.077 405.575 221.55Z" fill="#EE6633" />
                            <path d="M415.059 214.352C421.089 214.352 425.977 209.578 425.977 203.689C425.977 197.8 421.089 193.026 415.059 193.026C409.03 193.026 404.141 197.8 404.141 203.689C404.141 209.578 409.03 214.352 415.059 214.352Z" fill="#FFB8B8" />
                            <path d="M403.945 198.45C409.116 201.533 414.946 203.409 420.982 203.933L419.186 201.831C420.493 202.303 421.869 202.57 423.262 202.622C424.654 202.6 426.112 202.077 426.901 200.958C427.254 200.402 427.463 199.77 427.511 199.118C427.56 198.466 427.446 197.811 427.179 197.211C426.632 196.014 425.78 194.974 424.705 194.19C422.799 192.717 420.55 191.728 418.157 191.31C415.765 190.893 413.304 191.06 410.994 191.796C409.409 192.259 407.99 193.148 406.899 194.362C405.864 195.609 403.871 196.72 404.401 198.24L403.945 198.45Z" fill="#2F2E41" />
                            <path d="M416.895 189.844C413.452 186.434 409.285 183.802 404.687 182.134C401.736 181.066 398.524 180.407 395.439 181.013C392.354 181.619 389.436 183.704 388.575 186.66C387.872 189.078 388.598 191.681 389.691 193.957C390.783 196.232 392.241 198.343 393.124 200.703C394.026 203.112 394.297 205.703 393.913 208.24C393.529 210.776 392.503 213.18 390.927 215.231C389.351 217.282 387.275 218.917 384.889 219.986C382.502 221.055 379.88 221.525 377.26 221.353C380.291 221.75 383.085 223.141 386.048 223.882C389.011 224.622 392.509 224.572 394.71 222.499C397.04 220.305 397.087 216.739 396.974 213.58C396.807 208.885 396.639 204.189 396.472 199.494C396.386 197.1 396.314 194.628 397.198 192.393C398.082 190.158 400.183 188.201 402.636 188.221C404.495 188.237 406.141 189.337 407.632 190.422C409.123 191.507 410.701 192.664 412.553 192.825C414.405 192.987 416.52 191.648 416.381 189.837L416.895 189.844Z" fill="#2F2E41" />
                            <path d="M425.85 234.236L419.617 234.401L419.164 238.677L419.062 239.667L409.3 243.948L408.411 244.339V251.949L409.3 251.702L412.109 250.921H412.123L424.498 247.478L424.64 247.439C425.64 247.157 426.52 246.567 427.15 245.757C427.779 244.948 428.125 243.962 428.134 242.945L428.165 237.896L428.192 234.175L425.85 234.236Z" fill="#FFB8B8" />
                            <path d="M427.877 225.779C427.794 224.457 427.176 223.221 426.16 222.344C425.145 221.467 423.814 221.019 422.46 221.1C421.107 221.182 419.842 221.785 418.944 222.777C418.045 223.769 417.587 225.069 417.671 226.391L418.35 237.227C418.369 237.512 418.451 237.79 418.592 238.041C418.732 238.291 418.928 238.509 419.164 238.677C419.54 238.951 420.003 239.085 420.471 239.055L425.236 238.768L426.681 238.682C426.944 238.669 427.202 238.604 427.439 238.492C427.675 238.379 427.886 238.221 428.059 238.026C428.097 237.985 428.133 237.941 428.165 237.896C428.448 237.526 428.587 237.071 428.557 236.611L427.877 225.779Z" fill="#EE6633" />
                            <path d="M409.874 254.91H409.3V254.854C409.007 254.893 408.709 254.932 408.411 254.976V255.779H412.518C411.656 255.475 410.774 255.185 409.874 254.91ZM409.874 254.91H409.3V254.854C409.007 254.893 408.709 254.932 408.411 254.976V255.779H412.518C411.656 255.475 410.774 255.185 409.874 254.91ZM413.968 254.91H409.3V234.288C409.299 233.582 409.062 232.896 408.627 232.332C408.192 231.768 407.581 231.358 406.886 231.162C406.588 231.074 406.278 231.03 405.966 231.032H366.404C365.52 231.033 364.673 231.376 364.048 231.987C363.423 232.597 363.071 233.425 363.07 234.288V255.562C363.071 256.425 363.422 257.253 364.047 257.864C364.672 258.474 365.52 258.818 366.404 258.818H413.968C414.46 258.817 414.935 258.639 415.301 258.318C415.668 257.997 415.9 257.555 415.954 257.077C415.964 257.006 415.968 256.935 415.968 256.864C415.967 256.346 415.756 255.85 415.381 255.484C415.006 255.117 414.498 254.911 413.968 254.91ZM415.079 256.864C415.079 257.152 414.962 257.428 414.753 257.632C414.545 257.835 414.262 257.949 413.968 257.95H366.404C365.756 257.949 365.134 257.697 364.676 257.25C364.217 256.802 363.96 256.195 363.959 255.562V234.288C363.96 233.655 364.217 233.048 364.676 232.6C365.134 232.152 365.756 231.901 366.404 231.9H405.966C406.156 231.9 406.346 231.921 406.531 231.965C407.066 232.09 407.542 232.387 407.883 232.808C408.224 233.23 408.41 233.751 408.411 234.288V255.779H413.968C414.238 255.779 414.498 255.875 414.701 256.049C414.904 256.224 415.035 256.464 415.07 256.725C415.074 256.773 415.079 256.816 415.079 256.864ZM409.874 254.91H409.3V254.854C409.007 254.893 408.709 254.932 408.411 254.976V255.779H412.518C411.656 255.475 410.774 255.185 409.874 254.91Z" fill="#3F3D56" />
                            <path d="M386.184 247.53C387.657 247.53 388.851 246.364 388.851 244.925C388.851 243.487 387.657 242.32 386.184 242.32C384.711 242.32 383.517 243.487 383.517 244.925C383.517 246.364 384.711 247.53 386.184 247.53Z" fill="#EE6633" />
                            <path d="M147.959 30.9849C147.949 31.1832 147.956 31.382 147.978 31.5795L134.019 43.0212L129.856 41.5492L126.761 47.3946L135.861 51.6256L151.122 34.9003C151.892 35.0368 152.687 34.941 153.401 34.6255C154.114 34.3101 154.712 33.79 155.116 33.1344C155.519 32.4788 155.709 31.7188 155.659 30.9554C155.609 30.1921 155.323 29.4615 154.838 28.861C154.353 28.2605 153.692 27.8184 152.944 27.5935C152.195 27.3687 151.394 27.3718 150.648 27.6023C149.901 27.8329 149.244 28.28 148.763 28.8842C148.283 29.4885 148.003 30.2212 147.959 30.9849Z" fill="#FFB8B8" />
                            <path d="M129.238 50.1984L115.759 45.4464C114.521 45.0101 113.512 44.1116 112.953 42.9485C112.394 41.7854 112.33 40.4529 112.777 39.2443C113.224 38.0356 114.144 37.0498 115.335 36.5036C116.525 35.9575 117.89 35.8957 119.127 36.332L132.607 41.084C132.811 41.156 132.999 41.2665 133.159 41.4094C133.32 41.5522 133.45 41.7245 133.542 41.9165C133.634 42.1085 133.687 42.3163 133.697 42.5281C133.707 42.74 133.674 42.9517 133.6 43.1511L131.355 49.2276C131.206 49.6301 130.899 49.9583 130.502 50.1403C130.105 50.3223 129.651 50.3432 129.238 50.1984Z" fill="#CCCCCC" />
                            <path d="M119.366 96.4922L123.871 96.4918L126.014 79.5206L119.365 79.521L119.366 96.4922Z" fill="#FFB8B8" />
                            <path d="M132.559 100.577L118.401 100.578L118.401 95.235L127.089 95.2346C128.54 95.2345 129.931 95.7974 130.957 96.7993C131.983 97.8012 132.559 99.1601 132.559 100.577Z" fill="#2F2E41" />
                            <path d="M108.233 90.8083L111.918 93.339L123.666 80.6603L118.227 76.9257L108.233 90.8083Z" fill="#FFB8B8" />
                            <path d="M116.175 100.693L104.593 92.74L107.739 88.3694L114.846 93.2499C116.033 94.0649 116.84 95.307 117.089 96.7029C117.338 98.0988 117.009 99.5343 116.175 100.693Z" fill="#2F2E41" />
                            <path d="M129.224 65.9207C129.224 65.9207 140.466 64.6252 138.448 71.7504C136.43 78.8755 113.946 85.029 113.946 85.029L129.224 65.9207Z" fill="#FFB8B8" />
                            <path d="M121.486 29.5646C126.47 29.5646 130.511 25.6182 130.511 20.75C130.511 15.8818 126.47 11.9353 121.486 11.9353C116.501 11.9353 112.461 15.8818 112.461 20.75C112.461 25.6182 116.501 29.5646 121.486 29.5646Z" fill="#FFB8B8" />
                            <path d="M92.7044 83.57C87.569 77.7297 85.7719 68.7663 93.9616 61.3113C95.9842 59.5154 98.2743 58.0299 100.754 56.9058L107.354 38.8773C108.04 36.9947 109.297 35.361 110.958 34.1942C112.618 33.0274 114.604 32.3829 116.65 32.3469C118.636 32.2631 120.599 32.782 122.271 33.8322C123.943 34.8824 125.241 36.4124 125.987 38.2121C126.793 40.043 126.886 42.0987 126.247 43.9914C124.282 49.9677 121.701 55.7339 118.545 61.2016L118.887 63.8684L135.57 65.3165L135.414 65.5636C135.333 65.6926 127.168 77.8433 116.723 85.9084C113.151 88.666 109.458 89.8089 105.972 89.8085C100.686 89.8082 95.8787 87.1799 92.7044 83.57Z" fill="#CCCCCC" />
                            <path d="M91.1298 23.5154C92.7265 21.6571 93.4113 19.2265 93.9623 16.8611C94.8339 13.1183 95.5086 9.24811 97.4452 5.9081C99.3817 2.56813 102.941 -0.199373 106.865 0.0112842C110.766 0.220739 113.921 3.28662 115.595 6.77498C116.001 6.62117 116.435 6.55227 116.869 6.57273C117.304 6.59319 117.729 6.70256 118.117 6.89374C119.324 7.53919 119.775 9.37376 118.771 10.2922C119.827 9.80081 120.978 9.53217 122.148 9.50368C123.317 9.4752 124.48 9.68752 125.56 10.1268C126.949 10.7044 128.148 11.645 129.026 12.8452C129.903 14.0453 130.424 15.4585 130.532 16.9293C130.574 17.5263 130.49 18.1253 130.285 18.6893C130.081 19.2532 129.76 19.7702 129.342 20.208C127.61 21.9491 125.161 21.3485 122.984 20.905C120.927 20.4861 118.422 20.373 117.263 22.2871C116.806 23.0846 116.678 24.0223 116.905 24.9088C117.349 26.8196 118.798 28.1505 120.203 29.4243L120.433 29.8413C115.471 30.7862 110.053 27.4768 108.752 22.7061C107.45 17.9354 110.464 12.4318 115.249 10.8403C114.931 10.85 114.615 10.7764 114.336 10.6273C114.056 10.4781 113.822 10.2587 113.658 9.99177C113.495 9.72483 113.407 9.42002 113.404 9.10884C113.401 8.79766 113.484 8.49139 113.643 8.22168C112.318 7.49695 110.819 7.13167 109.301 7.16376C106.829 7.32214 104.69 9.04056 103.404 11.108C102.118 13.1756 101.535 15.5753 100.945 17.9249C100.355 20.2746 99.7167 22.6692 98.3412 24.6813C97.3886 26.0749 96.1156 27.2317 94.6239 28.0595C93.1322 28.8872 91.4631 29.363 89.7497 29.4488C88.0363 29.5347 86.3261 29.2282 84.7555 28.5538C83.185 27.8795 81.7975 26.8559 80.7039 25.5649C82.4321 26.3834 84.3874 26.6261 86.2704 26.256C88.1534 25.8858 89.8603 24.9232 91.1298 23.5154Z" fill="#2F2E41" />
                            <path d="M157.416 47.5374C164.662 47.5374 170.535 41.8009 170.535 34.7246C170.535 27.6484 164.662 21.9119 157.416 21.9119C150.171 21.9119 144.298 27.6484 144.298 34.7246C144.298 41.8009 150.171 47.5374 157.416 47.5374Z" fill="#EE6633" />
                            <path d="M157.013 41.9304C156.96 41.8788 156.918 41.8174 156.889 41.7498C156.861 41.6822 156.846 41.6097 156.846 41.5365V27.3557C156.846 27.2079 156.906 27.0663 157.013 26.9618C157.12 26.8573 157.265 26.7986 157.416 26.7986C157.568 26.7986 157.713 26.8573 157.82 26.9618C157.927 27.0663 157.987 27.2079 157.987 27.3557V41.5365C157.987 41.6467 157.953 41.7544 157.891 41.846C157.828 41.9376 157.739 42.009 157.635 42.0511C157.53 42.0933 157.416 42.1043 157.305 42.0829C157.195 42.0614 157.093 42.0083 157.013 41.9304Z" fill="white" />
                            <path d="M149.753 34.84C149.674 34.7621 149.619 34.6629 149.597 34.5548C149.575 34.4468 149.587 34.3348 149.63 34.233C149.673 34.1312 149.746 34.0442 149.84 33.983C149.934 33.9218 150.044 33.8891 150.157 33.8891H164.676C164.827 33.8891 164.972 33.9478 165.079 34.0523C165.186 34.1567 165.246 34.2984 165.246 34.4461C165.246 34.5939 165.186 34.7355 165.079 34.84C164.972 34.9445 164.827 35.0031 164.676 35.0031H150.157C150.082 35.0033 150.008 34.9889 149.938 34.9609C149.869 34.9329 149.806 34.8918 149.753 34.84Z" fill="white" />
                            <path d="M148.412 43.2947C148.316 43.4701 148.235 43.6526 148.169 43.8405L130.555 48.4026L127.428 45.3421L122.082 49.3481L128.478 56.956L149.57 48.1516C150.208 48.5951 150.969 48.8383 151.753 48.8489C152.536 48.8596 153.303 48.6371 153.954 48.2112C154.604 47.7852 155.107 47.176 155.394 46.4644C155.681 45.7528 155.74 44.9727 155.562 44.2278C155.385 43.4828 154.979 42.8084 154.399 42.2941C153.819 41.7798 153.093 41.4501 152.317 41.3489C151.541 41.2476 150.751 41.3795 150.054 41.7271C149.356 42.0746 148.783 42.6214 148.412 43.2947Z" fill="#FFB8B8" />
                            <path d="M123.104 52.9146L112.971 43.0175C112.509 42.5678 112.143 42.0337 111.892 41.4455C111.642 40.8574 111.513 40.2268 111.512 39.5898C111.512 38.9529 111.64 38.3221 111.889 37.7335C112.138 37.145 112.504 36.6102 112.965 36.1598C113.426 35.7094 113.974 35.3523 114.576 35.1088C115.179 34.8653 115.825 34.7402 116.477 34.7408C117.129 34.7413 117.775 34.8674 118.377 35.1119C118.979 35.3564 119.526 35.7145 119.986 36.1657L130.12 46.0628C130.273 46.2127 130.395 46.3907 130.478 46.5866C130.561 46.7826 130.604 46.9926 130.604 47.2046C130.604 47.4167 130.561 47.6267 130.478 47.8226C130.395 48.0185 130.273 48.1965 130.12 48.3465L125.443 52.9146C125.132 53.2169 124.712 53.3867 124.274 53.3867C123.835 53.3867 123.415 53.2169 123.104 52.9146Z" fill="#CCCCCC" />
                        </g>
                        <defs>
                            <clipPath id="clip0_253_35">
                                <rect width="439" height="310" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div className="pr-40 my-auto">
                        <div className="text-4xl font-semibold text-gray-700 mb-12">Rate Model Performance</div>
                        <div className="text-2xl text-gray-500 font-light px-20">How does it work? It&apos;s simple yet extraordinary! Our chatbot draws responses from three distinct models, each with its unique capabilities. These models are meticulously crafted and fine-tuned to provide you with the most informative, engaging, and relevant conversations.</div>
                    </div>
                </div>
            </div>

            <div className="text-center py-20">
                <div className="text-orange-600 text-6xl font-medium">What is Anudesh?</div>
                <div className="text-2xl text-gray-500 font-light pt-20 px-96">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            </div>
            <div className="text-center bg-stone-800 py-6">
                <div className="text-white text-2xl font-medium">ANUDESH - Developed at AI4Bharat Lab</div>
            </div>
        </>
    )
}  