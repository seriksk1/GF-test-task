import { Sidebar } from '@/components';
import {
  ChevronLeftIcon,
  CircleCheckFilledIcon,
  DatacenterProxiesIcon,
} from '@/components/icons';
import {
  Button,
  Caption,
  Heading4,
  Heading5,
  Heading6,
  Input,
  Paragraph,
  ParagraphSmall,
  Subtitle,
  SubtitleSmall,
} from '@/components/ui';
import { ChevronDown, Edit, Flag } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Home',
  description: 'GF Home page',
};

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex flex-col gap-y-6 w-full gap-x-6 overflow-y-auto px-12 py-6 bg-(--bg-color-02)">
        <Button className="text-grey-800" variant="outline" size="small">
          <ChevronLeftIcon className="size-4" /> Back to all
        </Button>

        <div className="grid grid-cols-[7fr_3fr] gap-x-6">
          {/* Left side */}
          <div className="flex flex-col gap-y-6">
            {/* Section component */}
            <section className="flex flex-col gap-y-6 p-6 bg-base-white border border-grey-200 rounded-[8px]">
              <div className="flex gap-x-4">
                <DatacenterProxiesIcon className="size-14" />
                <div className="flex flex-col gap-y-1 flex-1">
                  <Heading4 className="text-grey-800">Datacenter Proxies</Heading4>
                  <ParagraphSmall className="text-grey-500">
                    High-speed, reliable proxies sourced from data centers, ideal for
                    managing high-volume, concurrent requests.
                  </ParagraphSmall>
                </div>
              </div>

              <div>
                <SubtitleSmall className="text-grey-800">
                  Select number of IPs
                </SubtitleSmall>
                <ParagraphSmall className="text-grey-500">
                  Choose the perfect quantity of IPs for your needs effortlessly
                </ParagraphSmall>
              </div>

              {/* Table component */}
              <div className="flex flex-col gap-y-2">
                <SubtitleSmall className="font-medium text-grey-800">
                  Bundle discounts
                </SubtitleSmall>
                <table className="w-full">
                  <thead className="bg-grey-100">
                    <tr className="border border-grey-200">
                      <th className="py-2 px-3 text-left">
                        <SubtitleSmall className="text-grey-500 font-medium">
                          IPs
                        </SubtitleSmall>
                      </th>
                      <th className="py-2 px-3 text-right">
                        <SubtitleSmall className="text-grey-500 font-medium">
                          10-24
                        </SubtitleSmall>
                      </th>
                      <th className="py-2 px-3 text-right">
                        <SubtitleSmall className="text-grey-500 font-medium">
                          25-49
                        </SubtitleSmall>
                      </th>
                      <th className="py-2 px-3 text-right">
                        <SubtitleSmall className="text-grey-500 font-medium">
                          50-99
                        </SubtitleSmall>
                      </th>
                      <th className="py-2 px-3 text-right">
                        <SubtitleSmall className="text-grey-500 font-medium">
                          100+
                        </SubtitleSmall>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-base-white">
                    <tr className="border border-grey-200">
                      <td className="py-2 px-3">
                        <ParagraphSmall className="text-grey-700 font-medium">
                          Price per IP
                        </ParagraphSmall>
                      </td>
                      <td className="py-2 px-3 text-right">
                        <ParagraphSmall className="text-grey-700 font-medium">
                          $3.00
                        </ParagraphSmall>
                      </td>
                      <td className="py-2 px-3 text-right">
                        <ParagraphSmall className="text-grey-700 font-medium">
                          $2.75
                        </ParagraphSmall>
                      </td>
                      <td className="py-2 px-3 text-right">
                        <ParagraphSmall className="text-grey-700 font-medium">
                          $2.50
                        </ParagraphSmall>
                      </td>
                      <td className="py-2 px-3 text-right">
                        <ParagraphSmall className="text-grey-700 font-medium">
                          $2.25
                        </ParagraphSmall>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Range component */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-y-2">
                  <div className="relative h-2 w-full bg-grey-100 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-1/10 bg-brand-500"></div>
                  </div>
                  <div className="flex justify-between">
                    {[10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].map(
                      (numberOfIps) => (
                        <ParagraphSmall
                          key={numberOfIps}
                          className="text-grey-500 font-medium tracking-[-0.2px]"
                        >
                          {numberOfIps}
                        </ParagraphSmall>
                      )
                    )}
                  </div>
                </div>
                <Button className="text-brand-500" variant="outline">
                  <Edit className="size-4 stroke-brand-500" /> Enter a custom quantity
                </Button>
              </div>

              {/* Subscription cycle component */}
              <div className="flex flex-col gap-y-2">
                <SubtitleSmall>Select subscription cycle</SubtitleSmall>
                <div className="flex px-4 py-3 bg-base-white border border-grey-300 gap-x-2 items-center rounded-[4px] cursor-pointer">
                  {/* Radio button component */}
                  <div className="border border-grey-300 bg-base-white size-4 rounded-full" />
                  <Subtitle className="text-grey-800 text-base">1 month</Subtitle>
                </div>
                <div className="flex px-4 py-3 bg-brand-50 outline-2 outline-brand-500 gap-x-2 items-center rounded-[4px] cursor-pointer">
                  {/* Radio button component */}
                  <div className="border-5 border-brand-500 bg-base-white size-4 rounded-full" />
                  <Subtitle className="text-grey-800 text-base">3 months</Subtitle>
                </div>
                <div className="flex px-4 py-3 bg-base-white border border-grey-300 gap-x-2 items-center rounded-[4px] cursor-pointer">
                  {/* Radio button component */}
                  <div className="border border-grey-300 bg-base-white size-4 rounded-full" />
                  <Subtitle className="text-grey-800 text-base">12 months</Subtitle>
                  {/* Badge component */}
                  <Caption className="font-medium text-green-80 py-0.5 px-1.5 outline outline-green-300 bg-green-50 rounded-[4px]">
                    Save 20%
                  </Caption>
                </div>
              </div>

              <div className="flex flex-col gap-y-2">
                <SubtitleSmall>Select location</SubtitleSmall>
                <div className="flex px-3 py-2.5 bg-base-white border border-grey-300 gap-x-2 items-center rounded-[4px] cursor-pointer">
                  <div className="flex items-center gap-x-2 flex-1">
                    <Flag className="size-5" />
                    <ParagraphSmall className="text-grey-900 font-medium">
                      United Kingdom
                    </ParagraphSmall>
                  </div>
                  <ChevronDown className="size-5" />
                </div>
              </div>
            </section>

            {/* Section component */}
            <section className="flex flex-col gap-y-4 p-6 bg-base-white border border-grey-200 rounded-[8px]">
              <div className="flex flex-col gap-y-4">
                <Heading6 className="text-grey-800">All plans include</Heading6>
                <div className="flex gap-x-[10%]">
                  <ul className="flex flex-col gap-y-2">
                    <li className="flex gap-x-2">
                      <CircleCheckFilledIcon className="size-5" />
                      <ParagraphSmall className="text-grey-600 font-medium flex-1">
                        Unlimited Concurrent Sessions
                      </ParagraphSmall>
                    </li>
                    <li className="flex gap-x-2">
                      <CircleCheckFilledIcon className="size-5" />
                      <ParagraphSmall className="text-grey-600 font-medium flex-1">
                        Automatic Proxy Potation
                      </ParagraphSmall>
                    </li>
                    <li className="flex gap-x-2">
                      <CircleCheckFilledIcon className="size-5" />
                      <ParagraphSmall className="text-grey-600 font-medium flex-1">
                        Proxy Servers in 195+ Countries
                      </ParagraphSmall>
                    </li>
                    <li className="flex gap-x-2">
                      <CircleCheckFilledIcon className="size-5" />
                      <ParagraphSmall className="text-grey-600 font-medium flex-1">
                        API access
                      </ParagraphSmall>
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-y-2">
                    <li className="flex gap-x-2">
                      <CircleCheckFilledIcon className="size-5" />
                      <ParagraphSmall className="text-grey-600 font-medium flex-1">
                        Country, Region, City, or ISP Targeting
                      </ParagraphSmall>
                    </li>
                    <li className="flex gap-x-2">
                      <CircleCheckFilledIcon className="size-5" />
                      <ParagraphSmall className="text-grey-600 font-medium flex-1">
                        HTTP, SOCKS5, and UDP support
                      </ParagraphSmall>
                    </li>
                    <li className="flex gap-x-2">
                      <CircleCheckFilledIcon className="size-5" />
                      <ParagraphSmall className="text-grey-600 font-medium flex-1">
                        Email and Chat Support
                      </ParagraphSmall>
                    </li>
                    <li className="flex gap-x-2">
                      <CircleCheckFilledIcon className="size-5" />
                      <ParagraphSmall className="text-grey-600 font-medium flex-1">
                        Custom Responses for Your Proxy Roquests
                      </ParagraphSmall>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right side */}
          <div className="flex flex-col w-full gap-y-4">
            {/* Section component */}
            <section className="flex flex-col gap-y-4 p-6 bg-base-white border border-grey-200 rounded-[8px]">
              {/* Order component */}
              <div className="flex flex-col gap-y-4">
                <Heading5>Order summary</Heading5>
                <div className="flex flex-col gap-y-4">
                  <Subtitle>Datacenter Proxies</Subtitle>
                  <ul className="flex flex-col gap-y-2">
                    <li className="flex gap-x-2">
                      <CircleCheckFilledIcon className="size-5" />
                      <ParagraphSmall className="text-grey-600 font-medium flex-1">
                        3-day Trial
                      </ParagraphSmall>
                    </li>
                    <li className="flex gap-x-2">
                      <CircleCheckFilledIcon className="size-5" />
                      <ParagraphSmall className="text-grey-600 font-medium flex-1">
                        Customer Success Manager
                      </ParagraphSmall>
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-y-2">
                    <li className="flex justify-between items-center gap-x-4">
                      <ParagraphSmall className="font-medium text-grey-600">
                        Quantity of IP
                      </ParagraphSmall>
                      <ParagraphSmall className="font-medium text-grey-800 text-right">
                        100 IPs
                      </ParagraphSmall>
                    </li>
                    <li className="flex justify-between items-center gap-x-4">
                      <ParagraphSmall className="font-medium text-grey-600">
                        Location
                      </ParagraphSmall>
                      <ParagraphSmall className="font-medium text-grey-800 text-right">
                        United Kingdom
                      </ParagraphSmall>
                    </li>
                    <li className="flex justify-between items-center gap-x-4">
                      <ParagraphSmall className="font-medium text-grey-600">
                        Price per IP
                      </ParagraphSmall>
                      <ParagraphSmall className="font-medium text-grey-800 text-right">
                        $2.50
                      </ParagraphSmall>
                    </li>
                    <li className="flex justify-between items-center gap-x-4">
                      <ParagraphSmall className="font-medium text-grey-600">
                        Subscription period
                      </ParagraphSmall>
                      <ParagraphSmall className="font-medium text-grey-800 text-right">
                        12 months
                      </ParagraphSmall>
                    </li>
                  </ul>
                  <div className="flex pt-4 gap-x-2">
                    <Input
                      className="flex-1 pl-3 pr-2 py-1 body2 placeholder:font-medium placeholder:text-grey-500 rounded-[4px] outline outline-grey-300"
                      name="discount"
                      placeholder="Add discount code"
                    />
                    <Button variant="outline" size="small">
                      Apply
                    </Button>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t-1 border-grey-300">
                    <SubtitleSmall className="text-grey-700">Total</SubtitleSmall>
                    <Heading4 className="font-medium text-grey-800">$140.00</Heading4>
                  </div>
                </div>
              </div>
            </section>
            <Button className="w-full" size="large">
              Continue to checkout
            </Button>
            <div className="flex justify-center grayscale-100">
              <div className="w-10 h-6 px-2.5">
                <Image
                  className="w-full h-full"
                  width={40}
                  height={0}
                  src="icons/payment/visa-icon.svg"
                  alt="Visa"
                />
              </div>
              <div className="w-10 h-6 px-2.5">
                <Image
                  className="w-full h-full"
                  width={40}
                  height={0}
                  src="icons/payment/mastercard-icon.svg"
                  alt="Mastercard"
                />
              </div>
              <div className="w-10 h-6 px-2.5">
                <Image
                  className="w-full h-full"
                  width={40}
                  height={24}
                  src="icons/payment/american-express-icon.svg"
                  alt="American Express"
                />
              </div>
              <div className="w-10 h-6 px-2.5">
                <Image
                  className="w-full h-full"
                  width={40}
                  height={0}
                  src="icons/payment/dinersclub-icon.svg"
                  alt="Diners Club"
                />
              </div>

              <div className="w-10 h-6 px-2.5">
                <Image
                  className="w-full h-full"
                  width={40}
                  height={0}
                  src="icons/payment/unionpay-icon.svg"
                  alt="UnionPay"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
