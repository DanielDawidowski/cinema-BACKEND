class ForgotPasswordTemplate {
  public passwordResetTemplate(username: string, resetLink: string): string {
    const imageUrl = "https://i.ibb.co/hWFmjfq/vue-clone.png";

    return `
    <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f7f7f7">
    <tbody>
      <tr>
        <td align="center" valign="top">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f7f7f7">
            <tbody>
              <tr>
                <td class="m_8415581259083956697header" style="padding: 12px 0 0" align="center">
                  <table width="620" border="0" cellspacing="0" cellpadding="0" class="m_8415581259083956697mobile-shell">
                    <tbody>
                      <tr>
                        <td
                          class="m_8415581259083956697td"
                          style="width: 620px; min-width: 620px; font-size: 0; line-height: 0; font-weight: normal; margin: 0; padding: 0"
                        >
                          <table
                            class="m_8415581259083956697header"
                            width="100%"
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            bgcolor="#f7f7f7"
                          >
                            <tbody>
                              <tr>
                                <td class="m_8415581259083956697header-inner" style="padding: 40px 15px; height: 300px; width: 270px">
                                  <div style="font-size: 0; line-height: 0" align="center">
                                    <a href="" style="text-decoration: none; color: inherit" target="_blank" data-saferedirecturl="">
                                      <img
                                        src=${imageUrl}
                                        border="0"
                                        width="255"
                                        height="110"
                                        alt=""
                                        class="CToWUd"
                                        style="object-fit: cover"
                                      />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
  
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td align="center">
                  <table width="620" border="0" cellspacing="0" cellpadding="0" class="m_8415581259083956697mobile-shell">
                    <tbody>
                      <tr>
                        <td
                          class="m_8415581259083956697td"
                          style="width: 620px; min-width: 620px; font-size: 0; line-height: 0; font-weight: normal; margin: 0; padding: 0"
                        >
                          <table
                            class="m_8415581259083956697main-table"
                            width="100%"
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            bgcolor="#ffffff"
                            style="border-radius: 10px"
                          >
                            <tbody>
                              <tr>
                                <td style="padding: 0">
                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tbody>
                                      <tr>
                                        <td class="m_8415581259083956697content m_8415581259083956697content-top" style="padding: 40px 46px">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <div
                                                    class="m_8415581259083956697h1-mobile-medium"
                                                    style="
                                                      color: #50b5ff;
                                                      font-family: 'Open Sans', sans-serif;
                                                      font-size: 24px;
                                                      line-height: 30px;
                                                      letter-spacing: 0;
                                                      font-weight: 600;
                                                    "
                                                    align="left"
                                                  >
                                                    Prośba o zmianę hasła
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  height="32"
                                                  style="font-size: 0; line-height: 0; width: 100%; min-width: 100%"
                                                  align="center"
                                                ></td>
                                              </tr>
                                              <tr>
                                                <td style="padding-bottom: 10px">
                                                  <div
                                                    style="
                                                      color: #333333;
                                                      font-family: 'Open Sans', sans-serif;
                                                      font-size: 16px;
                                                      line-height: 26px;
                                                      font-weight: bold;
                                                    "
                                                    class="m_8415581259083956697text"
                                                    align="left"
                                                  >
                                                    Dear ${username},
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td style="padding-bottom: 36px">
                                                  <div
                                                    class="m_8415581259083956697text"
                                                    style="
                                                      color: #333333;
                                                      font-family: 'Open Sans', sans-serif;
                                                      font-size: 16px;
                                                      line-height: 26px;
                                                    "
                                                    align="left"
                                                  >
                                                  You have asked to change your account password on the website
                                                    <span class="il">Vue Clone</span>
                                                    To do this, click the button below.
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td align="left">
                                                  <table
                                                    class="m_8415581259083956697cta-button"
                                                    width="300"
                                                    border="0"
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                    bgcolor="#50b5ff"
                                                    style="border-radius: 4px; font-weight: 600"
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td width="100%" align="center" height="48" style="color: #ffffff">
                                                          <a
                                                            href=${resetLink}
                                                            style="
                                                              display: block;
                                                              color: #ffffff;
                                                              text-decoration: none;
                                                              background-color: #50b5ff;
                                                              font-family: 'Open Sans', sans-serif;
                                                              font-size: 16px;
                                                              line-height: 26px;
                                                              text-align: center;
                                                              min-width: 276px;
                                                              min-height: 24px;
                                                              border-radius: 4px;
                                                              padding: 11px 12px;
                                                            "
                                                            target="_blank"
                                                            data-saferedirecturl=${resetLink}
                                                          >
                                                            Reset password
                                                          </a>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td style="padding-bottom: 10px; padding-top: 36px">
                                                  <div
                                                    class="m_8415581259083956697text"
                                                    style="
                                                      color: #333333;
                                                      font-family: 'Open Sans', sans-serif;
                                                      font-size: 16px;
                                                      line-height: 26px;
                                                    "
                                                    align="left"
                                                  >
                                                  If you were not the one who sent the password change request, please notify the administrator                                                  </div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td style="padding-top: 22px">
                                                  <div
                                                    class="m_8415581259083956697text"
                                                    style="
                                                      color: #333333;
                                                      font-family: 'Open Sans', sans-serif;
                                                      font-size: 16px;
                                                      line-height: 33px;
                                                    "
                                                    align="left"
                                                  >
                                                    Thank You<br />
                                                    <span
                                                      class="il"
                                                      style="color: #000000; font-family: 'Open Sans', sans-serif; font-size: 26px"
                                                      >Vue Clone Team</span
                                                    >
                                                  </div>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  
    `;
  }
}

export const forgotPasswordTemplate: ForgotPasswordTemplate = new ForgotPasswordTemplate();
