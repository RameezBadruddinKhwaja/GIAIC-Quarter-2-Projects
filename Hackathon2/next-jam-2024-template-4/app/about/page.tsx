"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const featuresData = [
  {
    id: 1,
    title: "Free Delivery",
    icon: "data:image/png;base64,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", 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    id: 2,
    title: "100% Cash Back",
    icon: "data:image/jpeg;base64,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",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    id: 3,
    title: "Quality Product",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABelBMVEX////q8f/9rgL5+fmAqv9mgP/9ywL9kAKzzP/9yQDq8//5+vz9nwL9rAD9rwL5+//y9fz8kgD+iQD67NLt4Nd7p//p9f/9vQJifP9def9eev92pP+30P/+qQCwyf9Zdv/c5//k7f+fvv+Lsf/67sn//vn59unS4P+Rtf9ogv/e4/+Hmv//+OD66rX+66/9zhj+1Iz81U+nw//K0v/J2v9uiP+LpP/+3nf+44r+5r3745Xw3b3y16nr7O375aL59eX+4K35vVL90jbv4Mnz0pzw0rn6uUH7tSj2xnP82GCtuf94kv+3wv+isP+Qqv/D1v/+xGb+33z92Ff+2Jf9xF30wpX2tXf6pEf7mSPs5OH2yX/4rWDv28/3w2r9vUr2tHSLq+V0gOWZsNqFiNqCh9vpqDrdwmHXomHEu5S5mJSms8aWjsWdsdHvxzPuqS3lxE6gkLfYwaHPwbTiuoDAx9u9s77PvnvMnnKqlKaHrOvgo0fYolfHnXqIis1BXjbPAAARLElEQVR4nN2deVvbxhbGbccGW4pkF5BjFoNZbCAYHCiEfTEQDE2bEEh7m7SkTdomTZd0ubfrvf3uV4tjdEZzRiN7Zuz2PE/+SRzhH+fVWeaMRrGYfCuXq4tLW+sXh7Vare+WaTYaJ49PLw82B8tlBT9dtlUXN85qGcf6PLuVcMwwjGKxaDTO72zu/40xq0tnh30ttLeERsJnNmiicX5Q7fZXbceqWzZdX9AgoYdpO/POYLe/cDSrbtRI3zEIPUrz7wNZWVrG8HBCF/LkoNLtL89h+49qOB6T0LaiebrfbYAQmzljuC+c0HFkvZfFWj0LwQsndBgf9yojDx8HocN43ovpo7xBTQ7tEDpp8rTn6oBFPj5OQpsxcdBtJGDVi3C+jGe3ik65ZlsYY7HeQ2F1j+1Apyg9PNvY2lucmanuDw0dbe8cX141TIf0b+HGCsuBNtzy1uK+rmcd03U9p7mWt//sbh/XEyzIYr0nKgDGHZipXewNOmz6jZbl4i1zQYd26iZKaZib3caLxbYwvkzf2WIFwJGETcz87vapWcTceNllvjKm0MzhEgWPQuhB5nZOinRHFh93NW/s02vQTN96lYpHJ/Qgn5wmqIxGo4sxdQaR59Y+gocSOpD53UuTxmiYXaviFul8GxWcj0HoMdL92KV4s0hTaGadycckdBlPaTGn2BXEJQpgZnmQzRdC6DAOPaO4sXjQG4B9e3oIXyihE3R2KLejekSKRDPL+9kwPg7CeDy/Ww9K1VAsVNo9uBUmUF5CW6rHFC8qRawGADO1QQ4HchLabhxqBBgNhUmjWgsAXlT4ADkJ41rucUCpprLUXz4MAD4KDzHRCO2A85RENBqqCrhALZrZ43RgBEJbqTsBxLoawGA3scgPGIEwnt8m70U1ncZMR4BRCG3EQLSZkQ9YIaNMZiYKYCTCeP6I9KKCW5FcFI0IGI0wiGg8lg1IFmuZSBKNTBi8F2WXbxVSolsRAaMSxvPHREQ15K5OERrNPIoKGJkwnn8KvShXp2Q5uhwZMDphPE+0UzIL1DIRR2sV3kqmE0Jt11QWT4lcHzWMtkkY14iAKi/v7xOAkaNMm4Rxspkqygo2RJhZji7RNgnjWh3uUbmSA0g0hZn9dgj1nNYO4S5MGYacPgq6sD2NZgeLQ/k2EImsaJzLAKzCOHrYjgezm4mbA/faQdROoBNl9Pvr0IXtxFH90kjc7B/4sA1EIp4ap+IBiXrtLDqgrp8WE+bN/v6Bj/LRb8b8FYyn4sPpBowz0cOMXn5m30sOYf/Av6LHG20XEBbvCCeEcTR6PZrdd1fPXML+/o+fRFYqWZ+KBiQq0sjlmj7jLWQ3Cfv7P42KSDpRdHW63JkL9YPm12sRRg+p0InGM7GARKqg3YWMFW9dv/M2nbUImfFG0yj42hMYTsVmfVhzUwPp6XYZWTTVb1yv7l4T9g98otERtbz26UeUf9JAOBVcf0ORzlBI9ESxcbV9gwKZrZxcfzMfoR1Sd4OucvE+HuinER7JkyksSanljG66G33PN28QE/zsoH9Y5ifs738HlnCOOI8+e2fA+Reae7WGNJkCkdJXuHWvTTWKiatN/y6M7CaoKCGhP944204+9fBQwmNpMr0AIqWmCr3ViLuerOjeryF7CbMYQeiUcJonzty9Fh5KCFoMkQs2ZRBID6mpQvcvNdiQ9YOyntWzV8RKGUnYP/BZ3tkade8THx5GGM+D+tsQt5oB0n1mKZzQhSzWDyrPyOFKgNCJN/c+GRgg/pZOqO0AmYpL+qAmpYs0QOhBBsacQUKbkcTDCUFdY4irTcG8EGkMKYQ0oxHSjE5ItIkNUYBl4MINesWmhjAPAldR1I0I5mnUdK/Oh0f+G7soata2B/I90lYoIgSrw8KmNGD9AltDVEMY1575LiZsVdEfaDLrSOOkiBC2UCdiAMHUF8mG6nwIMmJDzGoN7A2RQKOMEK65iXm2ZhAEGmwJShXhrv9qRTHLpqBmq2HrF4oIYQclqG4DrRO97FZICIpvQ0wD9chPiK4EKyM8992IxlMhhOv+UIqusikj9KcLQQnxzE+I7mBTdh/6+3xBMyh/g4+mQ3WE/oQoaCuff50N3yCkjBBsIRKz3tZrhP7uQkjZBvbL9hyhiA6RIMTW7rtDKGRrzT/fhz19H/4zI40/W4gh/OfnQ1C1obtoulPTiKnawDJN9+vSUz+hmE0nYMX7ouuEj/2EYla9e6w/BB2wmP5wE/T4CKC6+xAsmIrp8eEAuNrldZon/qsJ2t4G1tqwRf3urLUJepoN7O5GW+DurJcKGs2AjRjdXvO+El/SEEtRh92NNGCAKGwP5hLPkrCq2ZP/YsJmT3B+iHSIighBZyFoyTtG7LxE6jZFM2C4e08UIDHH7+Z9CNb0Be77glui6DeiEkLtCdgyJG5TFLwR6Q2UGkK47Uvghn1wI9LHT0oIQdmdMMUBgoX9vgy1NFVBqA0BkYp8rGQpfEeNCsL8HSDSA4GEFSjTcrd8CEQq9pELuP2StuCmgBCOLAQ/LQsLN9qeGhWEdf+VBD/UDWVKaxLlE8I4kzAFPxcEoilt1i2fEMy3xT+gB0/DoCQM3TlkncNuDvBZgJBwoch07xl8jJuyqDjIZ0dDfBYgBMuIYtO9Z0vE44dBJ/JZ83TPUAu4EG6GknB4BPEsfnuPOd9o80nnOLEp0XahhGfy4QOIkU/86JAQ5kIZjx8GHiKtldvzYnuEWg6GatGpwjPCidiimxRCMI8Rukvfb4QT23rWud0TB46I5zYknYxBPArcnk7bIdSIklvKXega4cS2dNrWuRinxMNTsgDJI5TwkbdYQriSL/cgpWXoRXQQJZRQGyIOGRK0f51q5FltbdyKkQk1jajp5Z4QSQSbvuUbURGjEmrEyS0Sw4xnxDlK0aNNZEIiykgMM56ROsUe9BJFCBefEgKfdUKN1GlUxIhn7l0SqV62Rh0j42nEo3iinZsYOI5OZhx9a8TxClERI519STwmbZuSY2gDpyRHOiYjyvmlgVNoVZ2WTN6KfZkz/qTBTajFyefAldyEngVee5RZ5j0omf8c4d06KdGilPOvqFY+DCDyHnbNS0g57toQsyGYz3YDx107G224lMpFqOV3AjEmkZhUBxhLfx4gtG9GLqVyncm+ex48dt58/p5CwmnrBQWxNsPhxnBCLX8UPJA9YX5RWNOVAU5ayeR3QUT35RYdE+ZzZCXq3IPmX6nU8G1lhOM2YfIF5S1Imb49PYQx7P0W2g7tNSXml6lUqvCBKsBs0rUXwXDjvCNohn0APfsdJdrRCe0dJS5gKjWfVURYGm0iBs7X93Ij83ZkvmfmKJADXXvjAaYmVhURrlgeYfKP72mILiMKiRFqLh8N0PxqzQNMFe4qImy60DbrJRXRDqtL2At1kPc95XM7Dfp7u8xXqZZNqImms9eEyeTXdETnpVYzZd53duW1o6foe8leXwOmht9VQjhl+QitbxBEJ+g8miEP/goQai5eA323nPmtDzBVWFABmEtC+5xsiX2Mmb6zpar78jw9QOiNCYd2zhkvCDS/ep6CFldAuGoRiKhSW5QbS9VK2XsDYtaZkObzeS23+2T78txkv+TxNcGXGn5fAeFUgND6jh5TfZSZvtry2fqjra29g53j46enV/XQV1gmzDd/FUhCFTLVAoChbgSkt9yXkHK8btV8PU/yOYjyG4yHVELr8x+4GHnfJWuYf34ZcKBjI/JlOkcDdBh/+V7g+4Df/Ejls+2+bMD4KEKYtB6GvFKWm9Awf3owggCmJmTLdIwqUtdKWo6DMfy93ImfxtIrGGBqRHYfjPJZc5qzoWCP/e74MELDaNh86fTYfRRxXi7gJEOk3hmW2uIF8wXyLELDqP/s8NmED7D7UHYfPI6K1Jps1SoV1kvIcULD/Pd/0m9tHCWU2wfr0yjgVM5Xa8aPXkYkNM1Xv4ylr40h0zWZfXAJd+GqfyeatmJNf/MrtdIJEBoJM/Hmt2/nRxYA4TQuU5l98ApOCDqGSfevki9+DlL6CW0403zz2+9fzDs48+M+QpZMH8gDzGJ8tkiBC1vVuZX845uvX9YChKZrjVevv33eqs0Kc5wync9JI5zFIykUKazOLcv647tffv7615cvf/ih/uef/331v9e///jX8wLhJijTOVym8vrgYFvRssmASCm/BttGxyYKJFnLN1CmtMLbc7a05Zos7kJEpEGbjq1hX5yU6QL6wQlZMsW/OFOk4INjsffQkjN1v9syxdoK2+DiC+7C0XisNIw7kVOmshoMeu/remYFuJDeQro2Z18HD5KFDzhlOiKnwcC/uDXrJ8wxRRoTIVNJfTBDpGBn/STuQstZKiuhX5yQ6Rj6OTkyxe+uaCJlyvQBr0xLEgjx3nd01u9CbQ7/VTx0r/Q+p0zTU7hMZfTBaFuRnAaBtIR+LjmquVeanMDlt+InTOO5c008IKP3HQciZaxzzDWvxS3Tu6gTJ8T3wYzeF4g0jgekpkjZMk3zyVRCH8woxKBIGen+bbEVx2Va4JVpQTRgqXORWlOtqy0wmj9emc4KJmT0vkQkRV1oXffm7+OV2xpnNBXdYOC9b3IapHvc13Zd0LpcHAVMjQCZjuEyFdwHz+IuTEcXKVOmdzllKrjBwEvN0RIQKZ41Lf8C0ru8Ml1Bw65YmZJzX58RIsUjadKvKoZMU1OcMhU6D2b0vmNApGk+kfaeTBn9EBApK93D6M6SKciIK/ivQuA8OIcHyDkAiAek5CjcCpNlJH0g0zRe4k2Ikymj94UiZZR2U8Q1cfURMsVnNAL7YDxAJqFI8Q+OkiUIv0zRz4lrMPC5b3IORFJ8xTiZJMcpOfyLj8Boist0uCSIkJHFH/KKdCVwVYZMF3hlKqoPZmTxSZDucQ8GRMqU6TxI+viMRpRMGStLc2CXGiOSBkRqyxRfDi1wy1RMH8zQ3kNiaIh+MCjSWAxXHzGj+UByH5zlFSkjklolyoVXGTLlHCWKmQczel84j2GJlHplxrop7yhRSB/M0F5HIhUjUxHzYIZngEiRoaFjoyXqlWfxyo13lJga7nxfNGPuyz00pIs0FmNEU16ZCmgwGG0F99BwHLk2rj7uiXfnDUaOV6SsoSE2C7vNaDDSnDItdLpcw+h9+Sfb2L2SFTDx7limvCJlDQ3T6NUZMuUdJXYqU3zum7Tg0BD9nF0XoJe/jS/vp+AokZE7O+uDGb0v99BwmnF9hkyneUeJnfXB+LoLMTQMmWxj9h6vTPHF787mwYzeF85jWOmetaugxDtKZETTjvZFM3pfbpFi6d4zRhogJt5y+mD8a1tCRMq/MYMxo+lkXzQ+9yVFytwjxPwRAkaJHcyDx0edvXZUS0fbfoFb+MR73LX03YlrGwY20X4fPNu0kmuTrjWZmp2n7oLmOCbbmDEm3u6MZnws13wkLG7/dPtr3HbN/larq6vvNq1tQh5zVmoYarbC8vEkTjhsJ/1xVY/+MizXkUhDZDpekg8QblnWZDtMpGyZplUehcGw7DSeK7TQ/43LtLAmb0N3RMui6TBcpLhMhxd6BjDm5BW6C3niBCLTDnKAFFulIo7yeCFHTfpKnviNZKVkUKmBoSHdKCVnISV6Q5AAo+y65BKpLfHA4vfI/R4JotCyU6RSLb5QESdvxOEFVYeYRLUxiMgp0oBMh1UelxTR4OiCU6TkKLGg5vCLNm0SxBvefObfP1SYV3dWUluWvY433CL1y3Tkfi+lebq1BqoWf8BvyXRY4rOF4uxhM95Y/AEx24ymEz2X5ulWsqxoIn27MWOkB5pBPtOcZoOy/QI3R6aFtZ5M83Rzk3+U2WW20MNpnm7pUfpkG7MHvdZKhNtqKdrHpcWY/wPxky4Y0rjf2QAAAABJRU5ErkJggg==",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    id: 4,
    title: "24/7 Support",
    icon: "data:image/png;base64,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",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];


const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function AboutUsPage() {
  return (
    <div className="w-full">
      {/* Breadcrumb + Title */}
      <section className="bg-white py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-2 text-gray-500">
            Home &gt; Pages &gt; <span className="text-pink-600">About Us</span>
          </nav>
          <h1 className="text-3xl font-bold mb-1">About Us</h1>
          <p className="text-gray-600">Home . Pages . About Us</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-[#F7F7F7]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          {/* Left Column: Image */}
          <motion.div
            className="w-full md:w-1/2 h-80 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://images.pexels.com/photos/3184429/pexels-photo-3184429.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="About Hekto"
              fill
              style={{ objectFit: "cover" }}
              className="rounded shadow-lg"
            />
          </motion.div>
          {/* Right Column: Text */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4">
              Know About Our Ecommerce Business, History
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
              neque ultrices nulla nibh, malesuada diam est. Molestie nisi
              tempor amet est vitae eget dolor lobortis. Accumsan faucibus vitae
              lobortis quis bibendum arcu.
            </p>
            <Link
              href="/contact"
              className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
            >
              Contact us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            {...fadeInUp}
          >
            Our Features
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            {featuresData.map((feature) => (
              <div
                key={feature.id}
                className="bg-[#F7F7F7] rounded-lg p-6 text-center shadow-sm"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={60}
                    height={60}
                    className="rounded"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Client Say */}
      <section className="py-12 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            {...fadeInUp}
          >
            Our Client Say!
          </motion.h2>
          <motion.div
            className="max-w-3xl mx-auto text-center"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <div className="flex justify-center mb-4">
              {/* Example: 3 small images of clients or just one big. Adjust as needed. */}
              <Image
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80"
                alt="Selina Gomez"
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              dictum arcu vel sollicitudin aliquet id. Nunc at felis id ante
              nunc. Sed sagittis egestas nisi. Tristique ultrices dolor aliquam
              lacus varius faucibus.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
