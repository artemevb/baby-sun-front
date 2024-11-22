"use client";
import React, { useState } from "react";
import { Link } from "@/i18n/routing";
import { Menu, Dropdown, Typography, Space } from "antd";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

export const Navigation = ({ className }: Props) => {
  const t = useTranslations("Headers.Navigation");

  const navigationItems = [
    {
      title: t("Services"),
      href: "/services",
      data: [
        { title: t("Subservices.Surgery"), href: "/services/surgery" },
        { title: t("Subservices.Orthopedics"), href: "/services/orthopedics" },
        { title: t("Subservices.WomenSpa"), href: "/services/women-spa" },
        { title: t("Subservices.Cosmetology"), href: "/services/cosmetology" },
        { title: t("Subservices.ChildMassage"), href: "/services/child-massage" },
      ],
    },
    {
      title: t("Courses"),
      href: "/courses",
      data: [
        { title: t("Subcourses.ShrotTherapy"), href: "/courses/shrot-therapy" },
        { title: t("Subcourses.HijomaAndZuluk"), href: "/courses/hijoma-and-zuluk" },
        { title: t("Subcourses.Nursery"), href: "/courses/nursery" },
        { title: t("Subcourses.Cosmetology"), href: "/courses/cosmetology" },
      ],
    },
    { title: t("About"), href: "/about" },
    { title: t("Reviews"), href: "/reviews" },
    { title: t("Contacts"), href: "/contacts" },
  ];

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Helper function to generate the AntD Menu
  const renderMenu = (items: { title: string; href: string }[]) => (
    <Menu
      onMouseEnter={() => setHoveredItem(items[0].title)} // Keep text blue while in dropdown
      onMouseLeave={() => setHoveredItem(null)} // Reset when leaving dropdown
      style={{
        padding: "10px 0",
        borderRadius: "8px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="grid grid-cols-2 gap-2 px-4">
        {items.map((subItem, index) => (
          <Menu.Item key={index} className="hover:bg-gray-100 transition">
            <Link href={subItem.href}>
              <Typography.Text className="text-gray-700 hover:text-[#009FE3] whitespace-nowrap block px-2 py-1 rounded transition">
                {subItem.title}
              </Typography.Text>
            </Link>
          </Menu.Item>
        ))}
      </div>
    </Menu>
  );

  return (
    <div className={`flex items-center justify-between gap-8 ${className}`}>
      {navigationItems.map((item, index) => (
        <div key={index}>
          {item.data ? (
            <Dropdown
              overlay={renderMenu(item.data)}
              trigger={["hover"]}
              onVisibleChange={(visible) =>
                setHoveredItem(visible ? item.title : null)
              }
              className="group flex items-center"
            >
              <Space className="cursor-pointer flex gap-2 items-center">
                <Typography.Text
                  strong
                  className={`text-xl ${
                    hoveredItem === item.title ? "text-[#009FE3]" : "text-gray-800"
                  } transition-colors`}
                >
                  {item.title}
                </Typography.Text>
                {hoveredItem === item.title ? (
                  <Image
                    src="/svg/header/arrow-up.svg"
                    alt="arrow up"
                    width={12}
                    height={12}
                  />
                ) : (
                  <Image
                    src="/svg/header/arrow-down.svg"
                    alt="arrow down"
                    width={12}
                    height={12}
                  />
                )}
              </Space>
            </Dropdown>
          ) : (
            <Link href={item.href}>
              <Typography.Text
                strong
                className="text-xl text-gray-800 hover:text-[#009FE3] cursor-pointer"
              >
                {item.title}
              </Typography.Text>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
