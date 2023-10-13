import crypto from "crypto";
import HTTP_STATUS from "http-status-codes";
import { Request, Response } from "express";
import { IAuthDocument } from "@auth/interfaces/auth.interface";
import { BadRequestError } from "@global/helpers/error-handler";
import { authService } from "@service/db/auth.service";
import { joiValidation } from "@global/decorators/joi-validation.decorators";
import { emailSchema, passwordSchema } from "@auth/schemes/password";

export class Password {
  @joiValidation(emailSchema)
  public async create(req: Request, res: Response): Promise<void> {
    const { email } = req.body;
    const existingUser: IAuthDocument = await authService.getAuthUserByEmail(email);
    if (!existingUser) {
      throw new BadRequestError("Invalid credentials");
    }

    const randomBytes: Buffer = await Promise.resolve(crypto.randomBytes(20));
    const randomCharacters: string = randomBytes.toString("hex");
    await authService.updatePasswordToken(`${existingUser._id!}`, randomCharacters, Date.now() * 60 * 60 * 1000);

    res.status(HTTP_STATUS.OK).json({ message: "Password reset email sent." });
  }

  @joiValidation(passwordSchema)
  public async update(req: Request, res: Response): Promise<void> {
    const { password, confirmPassword } = req.body;
    const { token } = req.params;
    if (password !== confirmPassword) {
      throw new BadRequestError("Passwords do not match");
    }
    const existingUser: IAuthDocument = await authService.getAuthUserByPasswordToken(token);
    if (!existingUser) {
      throw new BadRequestError("Reset token has expired.");
    }

    existingUser.password = password;
    existingUser.passwordResetExpires = undefined;
    existingUser.passwordResetToken = undefined;
    await existingUser.save();

    res.status(HTTP_STATUS.OK).json({ message: "Password successfully updated." });
  }
}
